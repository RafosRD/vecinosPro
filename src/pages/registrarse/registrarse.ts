import { Component } from '@angular/core';
import { NavController, NavParams,  Loading, LoadingController, AlertController} from 'ionic-angular';
import {PerfilesService} from "../../services/perfiles.service";
import {LoginService} from "../../services/login.service";
import {AngularFireAuth} from "angularfire2/auth"



@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html'
})
export class RegistrarsePage {
  public loading:Loading;

  perfil = {id:null, nombre:null, telefono:null, profesion:null, email:null, password:null}
  user = {email:null, password:null}
  constructor(public navCtrl: NavController, public navParams: NavParams, public PerfilesService:PerfilesService, public LoginService: LoginService, public auth:AngularFireAuth,
              public loadingCtrl: LoadingController, public alertCtrl: AlertController) {

  }
  goToLogin(params){
    this.user.email = this.perfil.email;
    this.user.password = this.perfil.password;


    this.LoginService.registrar(this.perfil,this.user)
      .then(() => {
        this.loading.dismiss().then( () => {
          this.navCtrl.pop() ;
        });
      }, (error) => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
    this.loading = this.loadingCtrl.create();
    this.loading.present();




  }
}
