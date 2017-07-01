import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {PagosService} from "../../services/pagos.service";

@Component({
  selector: 'page-pago',
  templateUrl: 'pago.html'
})
export class PagoPage {
  public pago = {id:null, comentario:null, fecha:null, userId:null, edificioId:null, edificioNombre:null,monto:null,
    tarjetaNumero:null, fechaTarjeta:null, cvv: null, nombreTarjeta:null}
  id = null;

  constructor(public navCtrl: NavController, public navParams:NavParams, public  PagosService: PagosService) {
    this.id = navParams.get('id')
    PagosService.getPago(this.id)
      .subscribe( pago =>{
          this.pago = pago;
        }

      );

  }
}
