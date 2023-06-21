import {NgModule} from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import {CatComponent} from './cat/cat.component';
import {DogComponent} from './dog/dog.component';
import {ConsultComponent} from './consult/consult.component';
import {AppointmentComponent} from './appointment/appointment.component';
import {PackagesComponent} from './packages/packages.component';
import {ReviewsComponent} from './reviews/reviews.component';
import {PetguideComponent} from './petguide/petguide.component';
import {FormComponent} from './form/form.component';

const routes: Routes = [
  {path:'cat',component:CatComponent},
  {path:'dog',component:DogComponent},
  {path: 'consult',component:ConsultComponent},
  {path: 'appointment',component:AppointmentComponent},
  {path: 'packages',component:PackagesComponent},
  {path: 'reviews',component:ReviewsComponent},
  {path: 'petguide',component:PetguideComponent},
  {path: 'form',component:FormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
