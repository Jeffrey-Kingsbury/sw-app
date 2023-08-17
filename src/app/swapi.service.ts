import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class SwapiService {
  constructor() {}

  getStarShips(page:number) {
    return axios.get('https://swapi.dev/api/starships/?page=' + page);
  }

  getPeople(person:number){
    return axios.get('https://swapi.dev/api/people/?page=' + person);
  }
}
