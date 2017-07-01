import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AnunciosService} from "../../services/anuncios.service";


@Component({
  selector: 'page-anuncio',
  templateUrl: 'anuncio.html'
})
export class AnuncioPage {
  anuncio = {id:null, titulo:null, descripcion:null, fecha:null, userId:null, edificioId:null, edificioNombre:null}
  id = null;

  constructor(public navCtrl: NavController, public navParams:NavParams, public  AnunciosService: AnunciosService) {
    this.id = navParams.get('id')
    AnunciosService.getAnuncio(this.id)
      .subscribe( anuncio =>{
          this.anuncio = anuncio;
        }

      );

  }

}
