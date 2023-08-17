import { Component } from '@angular/core';
import { SwapiService } from '../swapi.service';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css'],
})
export class StarshipsListComponent {
  constructor(public swapiService: SwapiService) {}
}
