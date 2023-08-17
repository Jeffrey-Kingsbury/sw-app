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
  error: boolean = false;
  errorMessage: string = '';
  constructor(private swapiService: SwapiService) {}

  ngOnInit() {
  this.getAllStarShips(1);
  this.getAllPeople(1);
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
        } 
      })
      .catch((error) => {
        this.error = true;
        this.errorMessage = error;
        console.error('Error fetching starships:', error);
      });
  }

  getAllPeople(page: number) {
    this.swapiService
      .getPeople(page)
      .then((response) => {
        response.data.results.forEach((person: any) => {
          if (this.pilots.has(person.url)) {
            this.pilotDetails.push(person);
          }
        });
        if (response.data.next) {
          this.getAllPeople(++page);
        } else {
          this.loading = false;
        }
      })
      .catch((error) => {
        this.error = true;
        this.errorMessage = error;
        console.error('Error fetching people:', error);
      });
  }

}
