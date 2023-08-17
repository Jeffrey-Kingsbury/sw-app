import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { StarshipContainerComponent } from './starship-container/starship-container.component';
import { HeaderComponent } from './header/header.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    StarshipContainerComponent,
    HeaderComponent,
    StarshipsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'starships', component: StarshipsListComponent },
      { path: '', redirectTo: 'starships', pathMatch: 'full' }, // redirects to landing page
     // { path: '**', component: ErrorComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
