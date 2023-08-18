import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { Starship, People } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  loading_starships = true;
  loading_people = true;
  error = false;
  errorMessage = '';
  starships: any[] = [];
  people: any[] = [];

  constructor(private router: Router) {
    this.getStarShips();
    this.getPeople();
  }

  getStarShips(page = 1) {
    axios
      .get('https://swapi.dev/api/starships/?page=' + page)
      .then((response) => {
        this.starships.push(...response.data.results);
        if (response.data.next) {
          this.getStarShips(page + 1);
        } else {
          this.loading_starships = false;
        }
      })
      .catch((error) => {
        this.error = true;
        this.errorMessage = error;
        this.router.navigate(['/error']);
      });
  }

  getPeople(page = 1) {
    axios
      .get('https://swapi.dev/api/people/?page=' + page)
      .then((response) => {
        this.people.push(...response.data.results);
        if (response.data.next) {
          this.getPeople(page + 1);
        } else {
          this.loading_people = false;
        }
      })
      .catch((error) => {
        this.error = true;
        this.errorMessage = error;
        this.router.navigate(['/error']);
      });
  }
}
