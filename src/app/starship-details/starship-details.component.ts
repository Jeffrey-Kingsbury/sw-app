import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { SwapiService } from '../swapi.service';
import { Starship, People } from '../interfaces';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit{
  routeParams!: ParamMap;
  starshipId: string | null = '';
  starshipDetails!: Starship;
  pilots: People[] = []; 

  constructor(private route: ActivatedRoute, private swapiService: SwapiService) { }
  
  getStarshipDetails(name: string){
    const details = this.swapiService.starships.find((starship) => 
      starship.name === name
    );

    if(details?.pilots.length > 0){
      details.pilots.forEach((url: string) => {
        const pilot = this.swapiService.people.find((people) => 
          people.url === url
        );

        if (pilot) {
          this.pilots.push(pilot);
        }
      });
    }

    return details;
  }

  ngOnInit() {
    this.routeParams = this.route.snapshot.paramMap;
    this.starshipId = this.routeParams.get('starshipname');
    this.starshipDetails = this.getStarshipDetails(this.starshipId!);
  }
}


