import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { SuplidorPage } from '../suplidor/suplidor';
import { CalificacionNuevaPage } from '../calificacion-nueva/calificacion-nueva';
// import { TransaccionesPage } from '../transacciones/transacciones';
import { TransacciNNuevaPage } from '../transacci-nnueva/transacci-nnueva';
import { TransaccionesPage } from '../transacciones/transacciones';
import { TransaccionPage } from '../transaccion/transaccion';
import { CalificacionPage } from '../calificacion/calificacion';
import { SuplidorPage } from '../suplidor/suplidor';

@Component({
  selector: 'page-suplidores-de-servicios',
  templateUrl: 'suplidores-de-servicios.html'
})
export class SuplidoresDeServiciosPage {

  constructor(public navCtrl: NavController) {
  }
  goToSuplidor(params){
    if (!params) params = {};
    this.navCtrl.push(SuplidorPage);
  }goToCalificacionNueva(params){
    if (!params) params = {};
    this.navCtrl.push(CalificacionNuevaPage);
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
  }goToCalificacion(params){
    if (!params) params = {};
    this.navCtrl.push(CalificacionPage);
  // }goToSuplidor(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(SuplidorPage);
  }
}
