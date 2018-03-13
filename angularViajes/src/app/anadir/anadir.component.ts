import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as firebase from 'firebase';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styleUrls: ['./anadir.component.css']
})
export class AnadirComponent implements OnInit {

  viaje = {
    titulo:"",
    description:"",
    imagen:"",
    precio:"",
    id:""
  };
  ref = firebase.database().ref('viajes/');
  constructor() { }

  ngOnInit() {
  }

  saveForm() {
    let newData = this.ref.push();
    newData.set(this.viaje);
  }

}
