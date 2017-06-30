import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CalificacionNuevaPage } from '../calificacion-nueva/calificacion-nueva';
import { TransaccionesPage } from '../transacciones/transacciones';
import { TransacciNNuevaPage } from '../transacci-nnueva/transacci-nnueva';
// import { TransaccionesPage } from '../transacciones/transacciones';
import { TransaccionPage } from '../transaccion/transaccion';
import { CalificacionPage } from '../calificacion/calificacion';

@Component({
  selector: 'page-suplidor',
  templateUrl: 'suplidor.html'
})
export class SuplidorPage {

  constructor(public navCtrl: NavController) {
  }
  goToCalificacionNueva(params){
    if (!params) params = {};
    this.navCtrl.push(CalificacionNuevaPage);
  }goToTransacciones(params){
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
  }goToCalificacion(params){
    if (!params) params = {};
    this.navCtrl.push(CalificacionPage);
  }
}
