import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BloquePage } from '../bloque/bloque';
import {PerfilesService} from "../../services/perfiles.service";
import {EdificiosService} from "../../services/edificios.service";


@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html'
})
export class PerfilesPage {

  perfiles = [];
  public bloque = null;

  public esta = null;
  constructor(public navCtrl: NavController, public navParams:NavParams, public PerfilesService:PerfilesService, public EdificiosService:EdificiosService) {


    this.initializeItems()
    this.bloque = this.navParams.get('bloque');


  }
  goToBloque(params){


    if (!params) params = {};

    this.EdificiosService.getPerfilesEdificiosByPerfilId(params)
        .once('value')
        .then(snapshot => {

          for( var i in snapshot.val() ) {

             if(snapshot.val()[i].edificioId == this.bloque.edificioId){
               this.esta = true
             }

          }
          if(!this.esta){
            this.EdificiosService.addPerfilToBloque(params,this.bloque.id)
          }
          this.navParams.get('parentPage').reloadList()
          this.navCtrl.pop();
        });






  }
  initializeItems(){
    this.PerfilesService.getPerfiles()
        .subscribe( perfiles =>{
              this.perfiles = perfiles;
            }

        )

  }
  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;


    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }

    this.perfiles = this.perfiles.filter((v) => {
      if(v.email && q) {
        if (v.email.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });


  }

}
