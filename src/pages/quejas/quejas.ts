import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NuevaQuejaPage } from '../nueva-queja/nueva-queja';
// import { QuejasPage } from '../quejas/quejas';
import { QuejaPage } from '../queja/queja';

@Component({
  selector: 'page-quejas',
  templateUrl: 'quejas.html'
})
export class QuejasPage {

  constructor(public navCtrl: NavController) {
  }
  goToNuevaQueja(params){
    if (!params) params = {};
    this.navCtrl.push(NuevaQuejaPage);
  }goToQuejas(params){
    if (!params) params = {};
    this.navCtrl.push(QuejasPage);
  }goToQueja(params){
    if (!params) params = {};
    this.navCtrl.push(QuejaPage);
  }
}
