import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { StarshipContainerComponent } from './starship-container/starship-container.component';
import { HeaderComponent } from './header/header.component';
import { StarshipsListComponent } from './starships-list/starships-list.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { PeopleContainerComponent } from './people-container/people-container.component';
import { ErrorComponent } from './error/error.component';
import { StarshipDetailsComponent } from './starship-details/starship-details.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    StarshipContainerComponent,
    HeaderComponent,
    StarshipsListComponent,
    PeopleListComponent,
    PeopleContainerComponent,
    ErrorComponent,
    StarshipDetailsComponent,
    PeopleDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
