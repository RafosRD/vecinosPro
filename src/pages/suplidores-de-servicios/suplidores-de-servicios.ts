import { Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { SuplidorPage } from '../suplidor/suplidor';
import {SuplidoresService} from "../../services/suplidores.service";
import {CategoriasService} from "../../services/categorias.service";
import {CategoriasSuplidoresImportFB} from "../../services/categorias-suplidores";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "filter",
    pure: false
})


@Component({
  selector: 'page-suplidores-de-servicios',
  templateUrl: 'suplidores-de-servicios.html'
})
export class SuplidoresDeServiciosPage {

  suplidores = []
  suplidoresp =[]
  categorias = []
  suplidor = {id:null, nombre:null, categoria:null, telefono:null, descripcion:null, calificacion:null, imagen:null}
  categoria = {id:null}
  filtro = null


  @ViewChild('myNav') nav:NavController;
  constructor(public navCtrl: NavController, public SuplidoresService: SuplidoresService, public CategoriasService:CategoriasService,
              public CategoriasSuplidoresImportFB:CategoriasSuplidoresImportFB) {

    this.initializeItems()
    CategoriasService.getCategorias()
        .subscribe(categorias => {
          this.categorias = categorias
        } )
    // CategoriasSuplidoresImportFB.createCategorias();
      //CategoriasSuplidoresImportFB.createSuplidores();

    // this.suplidor.nombre = 'Electronica Jose'
    // this.suplidor.categoria = 'Electronica'
    // this.suplidor.telefono = '8093792122'
    // this.suplidor.descripcion = 'Reparamos todo tipo de electrodomestico y problemas electriocs del hogar'
    // this.suplidor.calificacion = 4.2
    // this.suplidor.imagen = 'http://img.freepik.com/vector-gratis/logo-abstracto-laberinto-con-la-letra-e_1032-86.jpg?size=338&ext=jpg'
    // SuplidoresService.createSuplidor(this.suplidor)

    // this.categoria.id = 'Acarreo'
    //
   //CategoriasService.createCategoria(this.categoria)


  }
  goToSuplidor(params){


    if (!params) params = {};
    this.navCtrl.push(SuplidorPage, {id:params});


  }initializeItems(){
    this.SuplidoresService.getSuplidores()
        .subscribe(suplidores => {
            this.suplidoresp = suplidores;
            this.suplidores = suplidores;
        });

    }
    getItems(filtro,categoria) {
    // Reset items back to all of the items
    this.initializeItems();

    // set q to the value of the searchbar
        //var q = searchbar.srcElement.value;
        var c = categoria
        var f = filtro



    // if the value is an empty string don't filter the items
    if (!c && !f) {
        return;
    }

    if(!c){
        this.suplidores = this.suplidoresp = this.suplidoresp.filter((v) => {
            if(v.nombre && f) {
                if (v.nombre.toLowerCase().indexOf(f.toLowerCase()) > -1) {
                    return true;
                }
                return false;
            }
        });

    }else{
        this.suplidores = this.suplidoresp = this.suplidoresp.filter((v) => {
            if(v.categoria && c) {
                if (v.categoria.toLowerCase().indexOf(c.toLowerCase()) > -1) {
                    if(v.nombre && f) {
                        if (v.nombre.toLowerCase().indexOf(f.toLowerCase()) > -1) {
                            return true;
                        }
                        return false;
                    }
                    return true;
                }
                return false;
            }
        });
    }

}
}
