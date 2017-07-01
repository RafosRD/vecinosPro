import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NuevaQuejaPage } from '../nueva-queja/nueva-queja';
import { QuejaPage } from '../queja/queja';
import {QuejasService} from "../../services/quejas.service";

@Component({
  selector: 'page-quejas',
  templateUrl: 'quejas.html'
})
export class QuejasPage {


  quejas = []

  @ViewChild('myNav') nav:NavController;
  constructor(public navCtrl: NavController, QuejasService:QuejasService) {
    QuejasService.getQuejas()
      .subscribe(quejas => {
        this.quejas = quejas;
      });

  }
  goToNuevaQueja(params){
    if (!params) params = {};
    this.navCtrl.push(NuevaQuejaPage);


  }goToQueja(params){
    if (!params) params = {};
    this.navCtrl.push(QuejaPage , {id:params});
  }
}
