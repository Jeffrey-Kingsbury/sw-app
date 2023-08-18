import { Component, Input } from '@angular/core';
import { People } from '../interfaces';

@Component({
  selector: 'app-people-container',
  templateUrl: './people-container.component.html',
  styleUrls: ['./people-container.component.css']
})
export class PeopleContainerComponent {
  @Input() details!: People;
}
