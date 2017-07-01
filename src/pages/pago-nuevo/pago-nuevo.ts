import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {PagosService} from "../../services/pagos.service";
import {EdificiosService} from "../../services/edificios.service";
import {AngularFireAuth} from "angularfire2/auth/auth";

@Component({
  selector: 'page-pago-nuevo',
  templateUrl: 'pago-nuevo.html'
})
export class PagoNuevoPage {

  public pago = {id:null, comentario:null, fecha:null, userId:null, edificioId:null, edificioNombre:null,monto:null,
    tarjetaNumero:null, fechaTarjeta:null, cvv: null, nombreTarjeta:null}
  public edificios = []
  public userId = null

  constructor(public navCtrl: NavController, public navParams: NavParams, public PagosService:PagosService,
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

    this.EdificiosService.getEdificio(this.pago.edificioId)
      .subscribe( edificio =>{

          this.pago.edificioNombre = edificio.nombre;
          this.pago.userId = this.userId;
          this.PagosService.createPago(this.pago);
        }

      );


    if (!params) params = {};
    this.navCtrl.pop();
  }
}
