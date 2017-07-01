import { Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuplidorPage } from '../suplidor/suplidor';
import {SuplidoresService} from "../../services/suplidores.service";

@Component({
  selector: 'page-suplidores-de-servicios',
  templateUrl: 'suplidores-de-servicios.html'
})
export class SuplidoresDeServiciosPage {

  suplidores = []
  suplidoresp =[]
  suplidor = {id:null, nombre:null, categoria:null, telefono:null, descripcion:null, calificacion:null, imagen:null}

  @ViewChild('myNav') nav:NavController;
  constructor(public navCtrl: NavController, public SuplidoresService: SuplidoresService) {

    SuplidoresService.getSuplidores()
      .subscribe(suplidores => {
        this.suplidoresp = suplidores;
        this.suplidores = suplidores;
      });

    this.suplidor.nombre = 'Electronica Jose'
    this.suplidor.categoria = 'Electronica'
    this.suplidor.telefono = '8093792122'
    this.suplidor.descripcion = 'Reparamos todo tipo de electrodomestico y problemas electriocs del hogar'
    this.suplidor.calificacion = 4.2
    this.suplidor.imagen = 'http://img.freepik.com/vector-gratis/logo-abstracto-laberinto-con-la-letra-e_1032-86.jpg?size=338&ext=jpg'

    SuplidoresService.createSuplidor(this.suplidor)
  }
  goToSuplidor(params){


    if (!params) params = {};
    this.navCtrl.push(SuplidorPage, {id:params});


  }
}
