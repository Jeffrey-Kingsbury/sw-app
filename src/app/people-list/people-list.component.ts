import { Component } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  constructor(public swapiService: SwapiService) {}

}
