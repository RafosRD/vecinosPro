import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {EdificiosService} from "../../services/edificios.service";


@Component({
  selector: 'page-bloque-nuevo',
  templateUrl: 'bloque-nuevo.html'
})
export class BloqueNuevoPage {

  bloque = {id:null, edificioId:null, nombre:null}

  constructor(public navCtrl: NavController, public navParams:NavParams, public EdificiosService:EdificiosService) {




  }
  goToEdificio(params){

    this.bloque.edificioId = this.navParams.get('edificioId')
    this.EdificiosService.createBloque(this.bloque);

    if (!params) params = {};
    this.navCtrl.pop();
  }
}
