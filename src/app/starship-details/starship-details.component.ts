import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
import { SwapiService } from '../swapi.service';
import { Starship } from '../interfaces';

@Component({
  selector: 'app-starship-details',
  templateUrl: './starship-details.component.html',
  styleUrls: ['./starship-details.component.css']
})
export class StarshipDetailsComponent implements OnInit{
  routeParams!: ParamMap;
  starshipId: string | null = '';
  starshipDetails! : Starship;

  constructor(private route: ActivatedRoute, private swapiService: SwapiService) { }
  
  getStarshipDetails(name: string){
    return this.swapiService.starships.find((starship) => 
    starship.name === name);
  }


  ngOnInit() {
    this.routeParams = this.route.snapshot.paramMap;
    this.starshipId = this.routeParams.get('starshipname');
    this.starshipDetails = this.getStarshipDetails(this.starshipId!)
  }


}
