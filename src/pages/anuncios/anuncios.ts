import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnuncioPage } from '../anuncio/anuncio';
import { AnuncioNuevoPage } from '../anuncio-nuevo/anuncio-nuevo';
import {AnunciosService} from "../../services/anuncios.service";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {EdificiosService} from "../../services/edificios.service";

@Component({
  selector: 'page-anuncios',
  templateUrl: 'anuncios.html'
})
export class AnunciosPage {

  anuncios = [];
  public userId = null;

  @ViewChild('myNav') nav:NavController;
  constructor(public navCtrl: NavController, public AnunciosService:AnunciosService, public AngularFireAuth:AngularFireAuth, public EdificiosService:EdificiosService){

    // AnunciosService.getAnuncios()
    //   .subscribe(anuncios => {
    //     this.anuncios = anuncios;
    //   });

    this.AngularFireAuth.authState.subscribe(data =>
        {
          this.userId = data.uid;
          var y = 0

          this.AnunciosService.getAnunciosByUserId(this.userId)
              .once('value')
              .then(snapshot => {

                for( var i in snapshot.val() ) {
                  this.anuncios[y] = snapshot.val()[i];
                  y++;
                }
              });



          this.EdificiosService.getPerfilesEdificiosByPerfilId(this.userId)
              .once('value')
              .then(snapshot => {
                for( var i in snapshot.val() ) {
                  this.AnunciosService.getAnunciosByEdificioId(snapshot.val()[i].edificioId)
                      .once('value')
                      .then(snapshot => {
                        for( var x in snapshot.val() ) {
                          if(snapshot.val()[x].userId != this.userId){
                            this.anuncios[y] = snapshot.val()[x];
                            y++;
                          }

                        }});
                }});
        }
    );


  }
  goToAnuncio(params){
    if (!params) params = {};
    this.navCtrl.push(AnuncioPage, {id:params});

  }goToAnuncioNuevo(params){
    if (!params) params = {};
    this.navCtrl.push(AnuncioNuevoPage, {id:0});
 }

}
