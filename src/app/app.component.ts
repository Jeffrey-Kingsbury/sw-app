import { Component } from '@angular/core';
import { SwapiService } from './swapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'sw-app';
  constructor(public swapiService: SwapiService) {}

  ngOnInit() {

  }

}
