import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransaccionesPage } from '../transacciones/transacciones';
// import { TransacciNNuevaPage } from '../transacci-nnueva/transacci-nnueva';
import { TransaccionPage } from '../transaccion/transaccion';

@Component({
  selector: 'page-transacci-nnueva',
  templateUrl: 'transacci-nnueva.html'
})
export class TransacciNNuevaPage {

  constructor(public navCtrl: NavController) {
  }
  goToTransacciones(params){
    if (!params) params = {};
    this.navCtrl.push(TransaccionesPage);
  }goToTransacciNNueva(params){
    if (!params) params = {};
    this.navCtrl.push(TransacciNNuevaPage);
  }goToTransaccion(params){
    if (!params) params = {};
    this.navCtrl.push(TransaccionPage);
  }
}
