import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransacciNNuevaPage } from '../transacci-nnueva/transacci-nnueva';
// import { TransaccionesPage } from '../transacciones/transacciones';
import { TransaccionPage } from '../transaccion/transaccion';

@Component({
  selector: 'page-transacciones',
  templateUrl: 'transacciones.html'
})
export class TransaccionesPage {

  constructor(public navCtrl: NavController) {
  }
  goToTransacciNNueva(params){
    if (!params) params = {};
    this.navCtrl.push(TransacciNNuevaPage);
  }goToTransacciones(params){
    if (!params) params = {};
    this.navCtrl.push(TransaccionesPage);
  }goToTransaccion(params){
    if (!params) params = {};
    this.navCtrl.push(TransaccionPage);
  }
}
