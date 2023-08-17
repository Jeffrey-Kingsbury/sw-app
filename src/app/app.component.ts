import { Component } from '@angular/core';
import { SwapiService } from './swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sw-app';
  starShips: any[] = [];
  pilots: Set<string> = new Set();
  pilotDetails: any[] = [];
  loading: boolean = true;
  
  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
    this.getAllStarShips(1);
  }

  getAllStarShips(page: number) {
    this.swapiService
      .getStarShips(page)
      .then((response) => {
        this.starShips.push(...response.data.results);
        response.data.results.forEach((starship: any) => {
          starship.pilots.forEach((pilot: any) => {
            this.pilots.add(pilot);
          });
        });
        if (response.data.next) {
          this.getAllStarShips(++page);
        } else {
          for (let pilot of this.pilots) {
            this.swapiService
              .getPilots(pilot)
              .then((response) => {
                this.pilotDetails.push(response.data);
                this.loading = false;
              })
              .catch((error) => {
                console.error('Error fetching pilots:', error);
              });
          }
        }
      })
      .catch((error) => {
        console.error('Error fetching starships:', error);
      });
  }
}
