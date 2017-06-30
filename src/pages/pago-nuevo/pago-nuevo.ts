import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransaccionesPage } from '../transacciones/transacciones';
import { TransacciNNuevaPage } from '../transacci-nnueva/transacci-nnueva';
// import { TransaccionesPage } from '../transacciones/transacciones';
import { TransaccionPage } from '../transaccion/transaccion';

@Component({
  selector: 'page-pago-nuevo',
  templateUrl: 'pago-nuevo.html'
})
export class PagoNuevoPage {

  constructor(public navCtrl: NavController) {
  }
  goToTransacciones(params){
    if (!params) params = {};
    this.navCtrl.push(TransaccionesPage);
  }goToTransacciNNueva(params){
    if (!params) params = {};
    this.navCtrl.push(TransacciNNuevaPage);
  // }goToTransacciones(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(TransaccionesPage);
  }goToTransaccion(params){
    if (!params) params = {};
    this.navCtrl.push(TransaccionPage);
  }
}
