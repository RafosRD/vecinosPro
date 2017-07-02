import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { PerfilesPage } from '../perfiles/perfiles';
import {EdificiosService} from "../../services/edificios.service";
import {PerfilesService} from "../../services/perfiles.service";

@Component({
  selector: 'page-bloque',
  templateUrl: 'bloque.html'
})
export class BloquePage {

  id = null
  bloque  = {id:null, edificioId:null, nombre:null}
  perfiles = []

  constructor(public navCtrl: NavController, public navParams:NavParams, public EdificiosService:EdificiosService, public PerfilesService:PerfilesService) {


    this.id = navParams.get('id')
    EdificiosService.getBloque(this.id)
      .subscribe( bloque =>{
          this.bloque = bloque;
        }

      )
      this.reloadList();





  }
  goToPerfil(params){
    if (!params) params = {};

    this.navCtrl.push(PerfilPage, {id:params});

  }goToPerfiles(params){
    if (!params) params = {};
    this.navCtrl.push(PerfilesPage, {bloque:params,'parentPage':this});

  }reloadList(){
    this.EdificiosService.getPerfilesBloquesByBloqueId(this.id)
        .once('value')
        .then(snapshot => {
            var y = 0
            for( var i in snapshot.val() ) {

                this.id = this.navParams.get('id')
                this.PerfilesService.getPerfil(snapshot.val()[i].perfilId)
                    .subscribe( perfil =>{
                            this.perfiles[y] = perfil;
                            y++
                        }

                    )


            }

        });
}
}
