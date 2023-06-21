import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DogComponent } from './dog/dog.component';
import { CatComponent } from './cat/cat.component';
import { ConsultComponent } from './consult/consult.component';
import { PetguideComponent } from './petguide/petguide.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PackagesComponent } from './packages/packages.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DogComponent,
    CatComponent,
    ConsultComponent,
    PetguideComponent,
    AppointmentComponent,
    PackagesComponent,
    ReviewsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
