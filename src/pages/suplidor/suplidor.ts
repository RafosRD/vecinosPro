import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CalificacionNuevaPage } from '../calificacion-nueva/calificacion-nueva';
import { CalificacionPage } from '../calificacion/calificacion';
import {SuplidoresService} from "../../services/suplidores.service";

@Component({
  selector: 'page-suplidor',
  templateUrl: 'suplidor.html'
})
export class SuplidorPage {

  public suplidor = {id:null, nombre:null, categoria:null, telefono:null, descripcion:null, calificacion:null, imagen:null}
  public calificaciones = []
  public id=null;
  public bloques = [];

  constructor(public navCtrl: NavController, public SuplidoresService:SuplidoresService , public navParams:NavParams) {

    this.id = navParams.get('id')
    SuplidoresService.getSuplidor(this.id)
      .subscribe( suplidor =>{
          this.suplidor = suplidor;
        }

      )

    SuplidoresService.getCalificaciones(this.id)
      .once('value')
      .then(snapshot => {
        var y = 0
        for( var i in snapshot.val() ) {

          this.calificaciones[y] = snapshot.val()[i];
          y += 1
        }
      });


  }
  goToCalificacionNueva(params){
    if (!params) params = {};
    this.navCtrl.push(CalificacionNuevaPage);

  }goToCalificacion(params){

    if (!params) params = {};
    this.navCtrl.push(CalificacionPage);
  }
}
