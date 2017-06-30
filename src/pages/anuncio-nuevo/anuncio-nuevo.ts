import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AnunciosService} from "../../services/anuncios.service";


@Component({
  selector: 'page-anuncio-nuevo',
  templateUrl: 'anuncio-nuevo.html'
})
export class AnuncioNuevoPage {
  anuncio = {id:null, titulo:null, descripcion:null}

  constructor(public navCtrl: NavController, public navParams: NavParams, public AnunciosService:AnunciosService) {



  }
  goToAnuncios(params){
    this.anuncio.id = Date.now()
    this.AnunciosService.createAnuncio(this.anuncio);
    this.navCtrl.pop();
    // if (!params) params = {};
    // this.navCtrl.push(AnunciosPage);
  }
}
