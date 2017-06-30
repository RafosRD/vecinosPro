import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegistrarsePage } from '../registrarse/registrarse';
import {PerfilesService} from "../../services/perfiles.service";
import {AngularFireAuth} from "angularfire2/auth"


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  perfil = {id:null, nombre:null, telefono:null, profesion:null, email:null, password:null}
  id = null

  constructor(public navCtrl: NavController, public PerfilesService: PerfilesService, AngularFireAuth: AngularFireAuth) {


    AngularFireAuth.authState.subscribe(data =>
      {
        PerfilesService.getPerfil(data.uid)
          .subscribe( anuncio =>{
              this.perfil = anuncio;
            }

          )
      }
    );



  }goToRegistrarse(params){
    if (!params) params = {};
    this.navCtrl.push(RegistrarsePage);
  }
}
