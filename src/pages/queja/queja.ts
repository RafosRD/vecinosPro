import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {QuejasService} from "../../services/quejas.service";

@Component({
  selector: 'page-queja',
  templateUrl: 'queja.html'
})
export class QuejaPage {

  public queja = {id:null, titulo:null, descripcion:null, fecha:null, userId:null, edificioId:null, edificioNombre:null, userNombre:null,}
  id = null;

  constructor(public navCtrl: NavController, public QuejaService:QuejasService, navParams: NavParams) {

    this.id = navParams.get('id')
    QuejaService.getQueja(this.id)
        .subscribe( queja =>{
              this.queja = queja;
            }

        );



  }
  
}
