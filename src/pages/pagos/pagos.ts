import { Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { PagoPage } from '../pago/pago';
import { PagoNuevoPage } from '../pago-nuevo/pago-nuevo';
import {PagosService} from "../../services/pagos.service";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {EdificiosService} from "../../services/edificios.service";


@Component({
  selector: 'page-pagos',
  templateUrl: 'pagos.html'
})
export class PagosPage {

  pagos = []
  public userId = null


  constructor(public navCtrl: NavController, public PagosService:PagosService, public AngularFireAuth:AngularFireAuth, public EdificiosService:EdificiosService ) {


    // PagosService.getPagos()
    //   .subscribe(pagos => {
    //     this.pagos = pagos;
    //   });


    this.AngularFireAuth.authState.subscribe(data =>
        {
          this.userId = data.uid;
          var y = 0

          this.PagosService.getPagosByUserId(this.userId)
              .once('value')
              .then(snapshot => {

                for( var i in snapshot.val() ) {
                  this.pagos[y] = snapshot.val()[i];
                  y++;
                }
              });



          this.EdificiosService.getEdificiosByAdminId(this.userId)
              .once('value')
              .then(snapshot => {
                for( var i in snapshot.val() ) {
                  this.PagosService.getPagosByEdificioId(snapshot.val()[i].id)
                      .once('value')
                      .then(snapshot => {
                        for( var x in snapshot.val() ) {
                          if(snapshot.val()[x].userId != this.userId){
                            this.pagos[y] = snapshot.val()[x];
                            y++;
                          }

                        }});
                }});
        }
    );





  }
  goToPago(params){
    if (!params) params = {};
    this.navCtrl.push(PagoPage, {id:params});

  }goToPagoNuevo(params){
    if (!params) params = {};
    this.navCtrl.push(PagoNuevoPage);

  }
}
