import { Component } from '@angular/core';
import { PetserviceService  } from '../petservice.service';
@Component({
  selector: 'app-petguide',
  templateUrl:'./petguide.component.html',
  styleUrls: ['./petguide.component.css']
})
export class PetguideComponent {
  public students:any=[];
  constructor(private _stuservice:PetserviceService){}
  ngOnInit()
  {
    this.students=this._stuservice.getStudents();
  }
}
