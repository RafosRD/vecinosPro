import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SuplidoresService} from "../../services/suplidores.service";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {SuplidorPage} from "../../pages/suplidor/suplidor"


@Component({
  selector: 'page-calificacion-nueva',
  templateUrl: 'calificacion-nueva.html'
})
export class CalificacionNuevaPage {
  suplidor = null;

  calificacion = {id:null, titulo:null, detalle:null, calificacion:null, suplidorId:null, userId:null}

  constructor(public navCtrl: NavController, public navParams:NavParams, public SuplidoresService:SuplidoresService,
              public AngularFireAuth:AngularFireAuth) {

    this.suplidor = this.navParams.get('suplidor');

  }

  goToSuplidor(params){

    this.AngularFireAuth.authState.subscribe(data =>
      {
        this.SuplidoresService.getCalificaciones(this.suplidor.id)
            .once('value')
            .then(snapshot => {
              var calf = 0
              var count = 0
              for( var i in snapshot.val() ) {

                calf += parseInt(snapshot.val()[i].calificacion);
                count++


              }
              calf += parseInt(this.calificacion.calificacion);
                count++;
                this.suplidor.calificacion = calf/count;

              this.calificacion.userId = data.uid;
              this.calificacion.suplidorId = this.suplidor.id;

              this.SuplidoresService.editSuplidores(this.suplidor);
              this.SuplidoresService.createCalificacion(this.calificacion);
              if (!params) params = {};
              this.navParams.get("parentPage").reloadList();
              this.navCtrl.pop() ;
            });
      }
    );



  }
}
