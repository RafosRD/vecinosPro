import { Component } from '@angular/core';
import {NavController, NavParams, Events} from 'ionic-angular';
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
  admin_nombre = null;
  public id=null;
  public bloques = [];

  constructor(public navCtrl: NavController, public navParams:NavParams, public EdificiosService:EdificiosService,
              PerfilesService:PerfilesService, public events:Events) {

    this.id = navParams.get('id')
    EdificiosService.getEdificio(this.id)
      .subscribe( edificio =>{
          this.edificio = edificio;
        }

      )

    PerfilesService.getPerfil(this.edificio.adminId)
      .subscribe( perfil =>{
          this.admin_nombre = perfil.nombre;
        }

      )

      this.reloadList();

      this.events.subscribe('reloadList',() => {
          this.reloadList()
      });










  }goToBloque(params){
    if (!params) params = {};
    this.navCtrl.push(BloquePage, {id:params});
  }goToBloqueNuevo(params){
    if (!params) params = {};
    this.navCtrl.push(BloqueNuevoPage, {edificioId:params, "parentPage": this });
  }
  public reloadList(){

    this.EdificiosService.getBloques(this.id)
        .once('value')
        .then(snapshot => {
            var y = 0
            for( var i in snapshot.val() ) {

                this.bloques[y] = snapshot.val()[i];
                y += 1
            }
        });

    }

}
