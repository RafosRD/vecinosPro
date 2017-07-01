import { Component, ViewChild  } from '@angular/core';
import { NavController} from 'ionic-angular';
import { NuevoEdificioPage } from '../nuevo-edificio/nuevo-edificio';
import {EdificiosService} from "../../services/edificios.service";
import {EdificioPage} from "../edificio/edificio";
import {AngularFireAuth} from "angularfire2/auth/auth";


@Component({
  selector: 'page-edificios',
  templateUrl: 'edificios.html'
})
export class EdificiosPage {

  edificios = [];
  userId = null;
  @ViewChild('myNav') nav:NavController;
  constructor(public navCtrl: NavController, public EdificiosService: EdificiosService, public AngularFireAuth:AngularFireAuth) {

    // EdificiosService.getEdificios()
    //   .subscribe(edificios => {
    //     this.edificios = edificios;
    //   });

    this.AngularFireAuth.authState.subscribe(data =>
        {
          this.userId = data.uid;
          var y = 0

          this.EdificiosService.getEdificiosByAdminId(this.userId)
              .once('value')
              .then(snapshot => {

                for( var i in snapshot.val() ) {
                  this.edificios[y] = snapshot.val()[i];
                  y++;
                }
              });



          this.EdificiosService.getPerfilesEdificiosByPerfilId(this.userId)
              .once('value')
              .then(snapshot => {
                for( var i in snapshot.val() ) {
                  this.EdificiosService.getEdificio(snapshot.val()[i].edificioId)
                      .subscribe(edificio => {
                        if(edificio.adminId != this.userId){
                          this.edificios[y] = edificio;
                          y++;

                        }

                  })
                }
              });
        }
    );


  }goToNuevoEdificio(params){
    if (!params) params = {};
    this.navCtrl.push(NuevoEdificioPage);

  }goToEdificio(params){
    if (!params) params = {};
    this.navCtrl.push(EdificioPage, {id:params});


  }
}
