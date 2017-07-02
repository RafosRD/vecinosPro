import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SuplidoresService} from "../../services/suplidores.service";

@Component({
  selector: 'page-calificacion',
  templateUrl: 'calificacion.html'
})
export class CalificacionPage {
  public id = null;
  public calificacion = {id:null, titulo:null, detalle:null, calificacion:null, suplidorId:null, userId:null};

  constructor(public navCtrl: NavController, public SuplidoresService:SuplidoresService, public navParams:NavParams) {

    this.id = this.navParams.get('id')

    this.SuplidoresService.getCalificacion(this.id)
        .subscribe( calificacion =>{
          console.log(calificacion)
              this.calificacion = calificacion;

            }

        )

  }

}
