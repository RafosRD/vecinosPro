import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {TransaccionesService} from "../../services/transacciones.service";
import {EdificiosService} from "../../services/edificios.service";
import {AngularFireAuth} from "angularfire2/auth/auth";


@Component({
  selector: 'page-transacci-nnueva',
  templateUrl: 'transacci-nnueva.html'
})
export class TransacciNNuevaPage {

  public transaccion = {id:null, titulo:null, descripcion:null, fecha:null, userId:null, edificioId:null, edificioN:null, monto:null}
  public userId = null;
  public edificios = []


  constructor(public navCtrl: NavController , public navParams: NavParams, public TransaccionesService:TransaccionesService,
              public EdificiosService:EdificiosService, public AngularFireAuth:AngularFireAuth) {

    this.AngularFireAuth.authState.subscribe(data =>
      {
        this.userId = data.uid;
        EdificiosService.getEdificiosByAdminId(this.userId)
          .once('value')
          .then(snapshot => {

            var y = 0
            for( var i in snapshot.val() ) {

              this.edificios[y] = snapshot.val()[i];
              y += 1
            }
          });
      }
    );




  }
  goToTransacciones(params){


    this.EdificiosService.getEdificio(this.transaccion.edificioId)
      .subscribe( edificio =>{
        this.transaccion.edificioN = edificio.nombre;

        this.transaccion.userId = this.userId;
        if (!params) params = {};
        this.TransaccionesService.createTransaccion(this.transaccion);

        }

      );

    this.navCtrl.pop();



  }
}
