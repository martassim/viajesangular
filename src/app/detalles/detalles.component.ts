import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  viaje={};
  constructor(private router: Router,private route: ActivatedRoute, private db: AngularFireDatabase) { }


  ngOnInit() {
    console.log("ID");
    console.log(this.route.snapshot.params['id']);
    this.getDetalleViajes(this.route.snapshot.params['id']);
  }

  getDetalleViajes(id) {
    console.log("viaje");
    this.viaje = this.getViajes('/viajes/' + "3");
    console.log(this.viaje);
  }

  getViajes(listPath): Observable<any[]> {
    console.log("getViajes");
    return this.db.list(listPath).valueChanges();
    
  }
}
