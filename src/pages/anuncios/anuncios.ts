import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AnuncioPage } from '../anuncio/anuncio';
import { AnuncioNuevoPage } from '../anuncio-nuevo/anuncio-nuevo';
import {AnunciosService} from "../../services/anuncios.service";

@Component({
  selector: 'page-anuncios',
  templateUrl: 'anuncios.html'
})
export class AnunciosPage {

  anuncios = []

  @ViewChild('myNav') nav:NavController;
  constructor(public navCtrl: NavController, public AnunciosService:AnunciosService){

    AnunciosService.getAnuncios()
      .subscribe(anuncios => {
        this.anuncios = anuncios;
      });


  }
  goToAnuncio(params){
    if (!params) params = {};
    this.navCtrl.push(AnuncioPage, {id:params});

  }goToAnuncioNuevo(params){
    if (!params) params = {};
    this.navCtrl.push(AnuncioNuevoPage, {id:0});
 }

}
