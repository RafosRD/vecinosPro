import { Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { PagoPage } from '../pago/pago';
import { PagoNuevoPage } from '../pago-nuevo/pago-nuevo';
import {PagosService} from "../../services/pagos.service";

@Component({
  selector: 'page-pagos',
  templateUrl: 'pagos.html'
})
export class PagosPage {

  pagos = []

  @ViewChild('myNav') nav:NavController;
  constructor(public navCtrl: NavController, PagosService:PagosService) {
    PagosService.getPagos()
      .subscribe(pagos => {
        this.pagos = pagos;
      });


  }
  goToPago(params){
    if (!params) params = {};
    this.navCtrl.push(PagoPage, {id:params});

  }goToPagoNuevo(params){
    if (!params) params = {};
    this.navCtrl.push(PagoNuevoPage);

  }
}
