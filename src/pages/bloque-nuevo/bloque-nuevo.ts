import { Component } from '@angular/core';
import {NavController, NavParams, Events} from 'ionic-angular';
import {EdificiosService} from "../../services/edificios.service";
import {EdificioPage} from "../../pages/edificio/edificio"


@Component({
  selector: 'page-bloque-nuevo',
  templateUrl: 'bloque-nuevo.html'
})
export class BloqueNuevoPage {

  bloque = {id:null, edificioId:null, nombre:null}

  constructor(public navCtrl: NavController, public navParams:NavParams, public EdificiosService:EdificiosService,
  public events:Events) {




  }
  goToEdificio(params){
    if (!params) params = {};
    this.bloque.edificioId = this.navParams.get('edificioId')
    this.EdificiosService.createBloque(this.bloque);
    this.navParams.get("parentPage").reloadList();
    this.navCtrl.pop()

  }
}
