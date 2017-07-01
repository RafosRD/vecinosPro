import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EdificiosPage } from '../edificios/edificios';
import {EdificiosService} from "../../services/edificios.service";
import {AngularFireAuth} from "angularfire2/auth/auth";


@Component({
  selector: 'page-nuevo-edificio',
  templateUrl: 'nuevo-edificio.html'
})
export class NuevoEdificioPage {

  edificio = {id:null, adminId:null, nombre:null}

  constructor(public navCtrl: NavController, public EdificiosService:EdificiosService, public AngularFireAuth:AngularFireAuth) {


  }
  goToEdificios(params){

    this.AngularFireAuth.authState.subscribe(data =>
      {
        this.edificio.adminId = data.uid;
        this.EdificiosService.createEdificios(this.edificio);
      }
    );

    if (!params) params = {};
    this.navCtrl.pop() ;
    this.navCtrl.setRoot(EdificiosPage)

  }
}
