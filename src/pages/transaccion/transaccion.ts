import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TransaccionesService} from "../../services/transacciones.service";

@Component({
  selector: 'page-transaccion',
  templateUrl: 'transaccion.html'
})
export class TransaccionPage {
  transaccion = {id:null, titulo:null, descripcion:null, fecha:null, userId:null, edificioId:null, edificioNombre:null}
  id = null;

  constructor(public navCtrl: NavController, public navParams:NavParams, public  TransaccionesService: TransaccionesService) {
    this.id = navParams.get('id')
    TransaccionesService.getTransaccion(this.id)
      .subscribe( transaccion =>{
          this.transaccion = transaccion;
        }

      );


  }

}
