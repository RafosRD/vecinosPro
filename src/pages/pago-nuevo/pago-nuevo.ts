import { Component , ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController} from 'ionic-angular';
import {PagosService} from "../../services/pagos.service";
import {EdificiosService} from "../../services/edificios.service";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {PerfilesService} from "../../services/perfiles.service";
import { PagosPage } from '../pagos/pagos';



@Component({
  selector: 'page-pago-nuevo',
  templateUrl: 'pago-nuevo.html'
})
export class PagoNuevoPage {

  public pago = {id:null, comentario:null, fecha:null, userId:null, edificioId:null, edificioNombre:null,monto:null,
    tarjetaNumero:null, fechaTarjeta:null, cvv: null, nombreTarjeta:null, nombreUser:null,}
  public edificios = []
  public userId = null

    @ViewChild('myNav') nav:NavController;

  constructor(public navCtrl: NavController, public navParams: NavParams, public PagosService:PagosService,
              public EdificiosService:EdificiosService, public AngularFireAuth:AngularFireAuth, public PerfilesService:PerfilesService, public viewCtrl:ViewController) {



    // this.AngularFireAuth.authState.subscribe(data =>
    //   {
    //     this.userId = data.uid;
    //     EdificiosService.getEdificiosByAdminId(this.userId)
    //       .once('value')
    //       .then(snapshot => {
    //
    //         var y = 0
    //         for( var i in snapshot.val() ) {
    //
    //
    //         }
    //       });
    //   }
    // );

      this.AngularFireAuth.authState.subscribe(data =>
          {
              this.userId = data.uid;
              var y = 0
              this.EdificiosService.getPerfilesEdificiosByPerfilId(this.userId)
                  .once('value')
                  .then(snapshot => {
                      for( var i in snapshot.val() ) {
                          this.EdificiosService.getEdificio(snapshot.val()[i].edificioId)
                              .subscribe( edificio =>{
                                  this.edificios[y] = edificio;
                                  y++
                              })

                      }

                  });
          }
      );



  }
  goToPagos(params){

    this.EdificiosService.getEdificio(this.pago.edificioId)
      .subscribe( edificio =>{

          this.pago.edificioNombre = edificio.nombre;
          this.pago.userId = this.userId;

          this.PerfilesService.getPerfil(this.pago.userId)
              .subscribe(perfil => {

                  this.pago.nombreUser = perfil.nombre
                  this.PagosService.createPago(this.pago);


                  }
              )
        }

      );


    if (!params) params = {};
      this.navCtrl.pop()
      this.navCtrl.setRoot(PagosPage)


  }
}
