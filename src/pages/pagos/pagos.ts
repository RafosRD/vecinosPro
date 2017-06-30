import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PagoPage } from '../pago/pago';
import { PagoNuevoPage } from '../pago-nuevo/pago-nuevo';
// import { TransaccionesPage } from '../transacciones/transacciones';
import { TransacciNNuevaPage } from '../transacci-nnueva/transacci-nnueva';
import { TransaccionesPage } from '../transacciones/transacciones';
import { TransaccionPage } from '../transaccion/transaccion';

@Component({
  selector: 'page-pagos',
  templateUrl: 'pagos.html'
})
export class PagosPage {

  constructor(public navCtrl: NavController) {
  }
  goToPago(params){
    if (!params) params = {};
    this.navCtrl.push(PagoPage);
  }goToPagoNuevo(params){
    if (!params) params = {};
    this.navCtrl.push(PagoNuevoPage);
  // }goToTransacciones(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(TransaccionesPage);
  }goToTransacciNNueva(params){
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
