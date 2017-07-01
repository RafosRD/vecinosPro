import { Component } from '@angular/core';
import { NavController, NavParams,  Loading, LoadingController, AlertController} from 'ionic-angular';
import { RegistrarsePage } from '../registrarse/registrarse';
import { AnunciosPage } from '../anuncios/anuncios';
import {LoginService} from "../../services/login.service";
import {AngularFireAuth} from "angularfire2/auth"
import {TabsControllerPage} from '../tabs-controller/tabs-controller';



@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  public loading:Loading;
  perfil = {id:null, nombre:null, telefono:null, profecion:null, email:null, password:null}
  user ={email:'raulovallet@gmail.com', password:'raul1234'};

  constructor(public navCtrl: NavController, public navParams: NavParams, public LoginService:LoginService, public auth:AngularFireAuth,
              public loadingCtrl: LoadingController, public alertCtrl: AlertController, ){

    // this.LoginService.login(this.user).then( authData => {
    //   this.loading.dismiss().then( () => {
    //     this.navCtrl.setRoot(AnunciosPage);
    //   });
    // }, error => {
    //   this.loading.dismiss().then( () => {
    //     let alert = this.alertCtrl.create({
    //       message: error.message,
    //       buttons: [
    //         {
    //           text: "Ok",
    //           role: 'cancel'
    //         }
    //       ]
    //     });
    //     alert.present();
    //   });
    // });
    // this.loading = this.loadingCtrl.create();
    // this.loading.present();



  }goToRegistrarse(params){
    if (!params) params = {};
    this.navCtrl.push(RegistrarsePage);


  }


  async Login(params){

    this.LoginService.login(this.user).then( authData => {
      this.loading.dismiss().then( () => {

        this.navCtrl.setRoot(TabsControllerPage);


      });
    }, error => {
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
