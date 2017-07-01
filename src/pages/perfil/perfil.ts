import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(public navCtrl: NavController,  public navParams:NavParams, public PerfilesService: PerfilesService, AngularFireAuth: AngularFireAuth) {



      if(typeof navParams.get('id') != 'string' ){
        console.log('hola que hace')
        AngularFireAuth.authState.subscribe(data =>
          {

            this.id = data.uid;
            PerfilesService.getPerfil(this.id)
              .subscribe( perfil =>{
                  this.perfil = perfil;
                }

              )

          }
        );

      }else{

        this.id = navParams.get('id');
        PerfilesService.getPerfil(this.id)
          .subscribe( perfil =>{
              this.perfil = perfil;
            }

          )

      }




  }goToRegistrarse(params){
    if (!params) params = {};
    this.navCtrl.push(RegistrarsePage);
  }
}
