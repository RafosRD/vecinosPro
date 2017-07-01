import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SuplidoresService} from "../../services/suplidores.service";
import {AngularFireAuth} from "angularfire2/auth/auth";


@Component({
  selector: 'page-calificacion-nueva',
  templateUrl: 'calificacion-nueva.html'
})
export class CalificacionNuevaPage {

  calificacion = {id:null, titulo:null, detalle:null, calificacion:null, suplidorId:null, userId:null}

  constructor(public navCtrl: NavController, public navParams:NavParams, public SuplidoresService:SuplidoresService, public AngularFireAuth:AngularFireAuth) {



  }

  goSuplidor(params){

    this.AngularFireAuth.authState.subscribe(data =>
      {
        this.calificacion.userId = data.uid;
      }
    );
    this.calificacion.suplidorId = this.navParams.get('suplidorId')
    this.SuplidoresService.createCalificacion(this.calificacion);
    if (!params) params = {};
    this.navCtrl.pop();
  }
}
