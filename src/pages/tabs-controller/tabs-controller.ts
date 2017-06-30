import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TransaccionesPage } from '../transacciones/transacciones';
import { AnunciosPage } from '../anuncios/anuncios';
import { SuplidoresDeServiciosPage } from '../suplidores-de-servicios/suplidores-de-servicios';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = TransaccionesPage;
  tab2Root: any = AnunciosPage;
  tab3Root: any = SuplidoresDeServiciosPage;
  constructor(public navCtrl: NavController) {
  }
  
}
