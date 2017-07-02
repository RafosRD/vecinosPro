import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransacciNNuevaPage } from '../transacci-nnueva/transacci-nnueva';
import { TransaccionPage } from '../transaccion/transaccion';
import {TransaccionesService} from "../../services/transacciones.service";
import {EdificiosService} from "../../services/edificios.service";
import {AngularFireAuth} from "angularfire2/auth/auth";

@Component({
  selector: 'page-transacciones',
  templateUrl: 'transacciones.html'
})
export class TransaccionesPage {
  public transacciones = [];
  public userId = null;

  @ViewChild('myNav') nav:NavController;
  constructor(public navCtrl: NavController, public TransaccionesService:TransaccionesService, public EdificiosService:EdificiosService, public AngularFireAuth:AngularFireAuth) {

    // TransaccionesService.getTransacciones()
    //   .subscribe(transacciones => {
    //     this.transacciones = transacciones;
    //   });


    this.reloadList();


  }
  goToTransacciNNueva(params){
    if (!params) params = {};
    this.navCtrl.push(TransacciNNuevaPage,{"parentPage":this});


  }goToTransaccion(params){
    if (!params) params = {};
    this.navCtrl.push(TransaccionPage, {id:params});


  }
  public reloadList(){
      this.AngularFireAuth.authState.subscribe(data =>
          {
              this.userId = data.uid;
              var y = 0

              this.TransaccionesService.getTransaccionesByUserId(this.userId)
                  .once('value')
                  .then(snapshot => {

                      for( var i in snapshot.val() ) {
                          this.transacciones[y] = snapshot.val()[i];
                          y++;
                      }
                  });



              this.EdificiosService.getPerfilesEdificiosByPerfilId(this.userId)
                  .once('value')
                  .then(snapshot => {
                      for( var i in snapshot.val() ) {
                          this.TransaccionesService.getTransaccionesByEdificioId(snapshot.val()[i].edificioId)
                              .once('value')
                              .then(snapshot => {
                                  for( var x in snapshot.val() ) {
                                      if(snapshot.val()[x].userId != this.userId){
                                          this.transacciones[y] = snapshot.val()[x];
                                          y++;
                                      }

                                  }});
                      }});
          }
      );

  }
}
