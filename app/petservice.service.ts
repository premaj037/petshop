import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetserviceService {

  constructor() { }
  getStudents(){
    return[
      {name:"labdror",n1:"9764653690",n2:"6538768757645",place:"chennai",price:"10000"},
      {name:"shitzhu",n1:"6456534354",n2:"87553465363",place:"coimbator",price:"20000"},
      {name:"pommerian",n1:"5345375674",n2:"7675465675",place:"erode",price:"16000"},
      {name:"Persian",n1:"6465354345",n2:"5677744497",place:"gobi",price:"25000"},
      {name:"Siberia",n1:"765634524324",n2:"36676778786",place:"",price:"150000"},
    ];
  }
}
