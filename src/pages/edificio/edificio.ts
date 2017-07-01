import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import { BloquePage } from '../bloque/bloque';
import { BloqueNuevoPage } from '../bloque-nuevo/bloque-nuevo';
import {EdificiosService} from "../../services/edificios.service";
import {PerfilesService} from "../../services/perfiles.service";


@Component({
  selector: 'page-edificio',
  templateUrl: 'edificio.html'
})
export class EdificioPage {

  edificio = {id:null, adminId:null, nombre:null};
  admin = {nombre:null}
  public id=null;
  public bloques = [];

  constructor(public navCtrl: NavController, public navParams:NavParams, EdificiosService:EdificiosService, PerfilesService:PerfilesService) {

    this.id = navParams.get('id')
    EdificiosService.getEdificio(this.id)
      .subscribe( edificio =>{
          this.edificio = edificio;
        }

      )
    PerfilesService.getPerfil(this.edificio.adminId)
      .subscribe( perfil =>{
          this.admin = perfil;
        }

      )

    EdificiosService.getBloques(this.id)
      .once('value')
      .then(snapshot => {
        var y = 0
        for( var i in snapshot.val() ) {

          this.bloques[y] = snapshot.val()[i];
          y += 1
        }
      });










  }goToBloque(params){
    if (!params) params = {};
    this.navCtrl.push(BloquePage, {id:params});
  }goToBloqueNuevo(params){
    if (!params) params = {};
    this.navCtrl.push(BloqueNuevoPage, {edificioId:params} );
  }

}
