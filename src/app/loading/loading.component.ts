import { Component } from '@angular/core';
import { randomQuote } from '../../assets/quotes';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
})
export class LoadingComponent {
randomQuote = randomQuote;
}
