import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AnunciosService} from "../../services/anuncios.service";
import {EdificiosService} from "../../services/edificios.service";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {AnunciosPage} from "../../pages/anuncios/anuncios"


@Component({
  selector: 'page-anuncio-nuevo',
  templateUrl: 'anuncio-nuevo.html'
})
export class AnuncioNuevoPage {
  public anuncio = {id:null, titulo:null, descripcion:null, fecha:null, userId:null, edificioId:null, edificioNombre:null}
  public edificios = []
  public userId = null

  constructor(public navCtrl: NavController, public navParams: NavParams, public AnunciosService:AnunciosService,
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
  goToAnuncios(params){

    this.EdificiosService.getEdificio(this.anuncio.edificioId)
      .subscribe( edificio =>{

        this.anuncio.edificioNombre = edificio.nombre;
        this.anuncio.userId = this.userId;
        this.AnunciosService.createAnuncio(this.anuncio);

        }

      );

      this.navCtrl.pop()
      this.navCtrl.setRoot(AnunciosPage);

    // if (!params) params = {};
  }
}
