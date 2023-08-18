import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';

const routes: Routes = [
  { path: 'starships', component: StarshipsListComponent },
  { path: 'starships/:starshipname', component: StarshipDetailsComponent },
  { path: 'people', component: PeopleListComponent },
  { path: 'people/:personname', component: PeopleDetailsComponent },
  { path: '', redirectTo: 'starships', pathMatch: 'full' }, // redirects to landing page
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
