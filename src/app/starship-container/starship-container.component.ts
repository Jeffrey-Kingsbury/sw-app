import { Component, Input } from '@angular/core';
import { Starship } from '../interfaces';

@Component({
  selector: 'app-starship-container',
  templateUrl: './starship-container.component.html',
  styleUrls: ['./starship-container.component.css'],
})
export class StarshipContainerComponent {
  isNum(value: number | string): boolean {
    return typeof value === 'number';
  }

  @Input() details!: Starship;
}
