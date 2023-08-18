import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { SwapiService } from '../swapi.service';
import { Starship, People } from '../interfaces';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.css'],
})
export class PeopleDetailsComponent {
  routeParams!: ParamMap;
  peopleId: string | null = '';
  peopleDetails!: People;
  starships: Starship[] = [];

  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService
  ) {}

  getPeopleDetails(name: string) {
    const details = this.swapiService.people.find(
      (person) => person.name === name
    );

    if (details?.starships.length > 0) {
      details.starships.forEach((url: string) => {
        const starship = this.swapiService.starships.find(
          (starship) => starship.url === url
        );

        if (starship) {
          this.starships.push(starship);
        }
      });
    }

    return details;
  }

  ngOnInit() {
    this.routeParams = this.route.snapshot.paramMap;
    this.peopleId = this.routeParams.get('personname');
    this.peopleDetails = this.getPeopleDetails(this.peopleId!);
  }
}
