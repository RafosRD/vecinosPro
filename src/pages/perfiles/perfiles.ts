import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BloquePage } from '../bloque/bloque';
import {PerfilesService} from "../../services/perfiles.service";
import {EdificiosService} from "../../services/edificios.service";


@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html'
})
export class PerfilesPage {

  perfiles = [];
  bloqueId = null;

  constructor(public navCtrl: NavController, public navParams:NavParams, PerfilesService:PerfilesService, public EdificiosService:EdificiosService) {

    PerfilesService.getPerfiles()
      .subscribe( perfiles =>{
          this.perfiles = perfiles;
        }

      )
    this.bloqueId = this.navParams.get('bloqueId');


  }
  goToBloque(params){


    if (!params) params = {};

    this.EdificiosService.addPerfilToBloque(params,this.bloqueId)
    this.navCtrl.pop();

  }

}
