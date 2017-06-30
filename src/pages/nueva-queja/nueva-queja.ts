import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuejasPage } from '../quejas/quejas';
// import { NuevaQuejaPage } from '../nueva-queja/nueva-queja';
import { QuejaPage } from '../queja/queja';

@Component({
  selector: 'page-nueva-queja',
  templateUrl: 'nueva-queja.html'
})
export class NuevaQuejaPage {

  constructor(public navCtrl: NavController) {
  }
  goToQuejas(params){
    if (!params) params = {};
    this.navCtrl.push(QuejasPage);
  }goToNuevaQueja(params){
    if (!params) params = {};
    this.navCtrl.push(NuevaQuejaPage);
  }goToQueja(params){
    if (!params) params = {};
    this.navCtrl.push(QuejaPage);
  }
}
