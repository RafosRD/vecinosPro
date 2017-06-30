import { Component, ViewChild  } from '@angular/core';
import { NavController} from 'ionic-angular';
import { NuevoEdificioPage } from '../nuevo-edificio/nuevo-edificio';
import {EdificiosService} from "../../services/edificios.service";
import {EdificioPage} from "../edificio/edificio";


@Component({
  selector: 'page-edificios',
  templateUrl: 'edificios.html'
})
export class EdificiosPage {

  edificios = []
  @ViewChild('myNav') nav:NavController;
  constructor(public navCtrl: NavController, public EdificiosService: EdificiosService) {

    EdificiosService.getEdificios()
      .subscribe(edificios => {
        this.edificios = edificios;
      });


  }goToNuevoEdificio(params){
    if (!params) params = {};
    this.navCtrl.push(NuevoEdificioPage);

  }goToEdificio(params){
    if (!params) params = {};
    this.navCtrl.push(EdificioPage, {id:params});


  }
}
