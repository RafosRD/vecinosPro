import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {QuejasService} from "../../services/quejas.service";
import {EdificiosService} from "../../services/edificios.service";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {PerfilesService} from "../../services/perfiles.service";

@Component({
  selector: 'page-nueva-queja',
  templateUrl: 'nueva-queja.html'
})
export class NuevaQuejaPage {

  public queja = {id:null, titulo:null, descripcion:null, fecha:null, userId:null, edificioId:null, edificioNombre:null, userNombre:null,}
  public edificios = []
  public userId = null

  constructor(public navCtrl: NavController, public navParams: NavParams, public QuejasService:QuejasService,
              public EdificiosService:EdificiosService, public AngularFireAuth:AngularFireAuth, public PerfilesService:PerfilesService) {



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
    //           this.edificios[y] = snapshot.val()[i];
    //           y += 1
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
  goToQuejas(params){

    this.EdificiosService.getEdificio(this.queja.edificioId)
      .subscribe( edificio =>{

          this.queja.edificioNombre = edificio.nombre;
          this.queja.userId = this.userId;

        this.PerfilesService.getPerfil(this.queja.userId)
          .subscribe( usuario =>{

              this.queja.userNombre = usuario.nombre;

              this.QuejasService.createQueja(this.queja);

            }

          );



        }

      );


    if (!params) params = {};
    this.navParams.get("parentPage").reloadList();
    this.navCtrl.pop();

  }


}
