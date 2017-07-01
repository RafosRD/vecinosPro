import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransacciNNuevaPage } from '../transacci-nnueva/transacci-nnueva';
import { TransaccionPage } from '../transaccion/transaccion';
import {TransaccionesService} from "../../services/transacciones.service";

@Component({
  selector: 'page-transacciones',
  templateUrl: 'transacciones.html'
})
export class TransaccionesPage {
  transacciones = []

  @ViewChild('myNav') nav:NavController;
  constructor(public navCtrl: NavController, TransaccionesService:TransaccionesService) {

    TransaccionesService.getTransacciones()
      .subscribe(transacciones => {
        this.transacciones = transacciones;
      });


  }
  goToTransacciNNueva(params){
    if (!params) params = {};
    this.navCtrl.push(TransacciNNuevaPage);


  }goToTransaccion(params){
    if (!params) params = {};
    this.navCtrl.push(TransaccionPage, {id:params});


  }
}
