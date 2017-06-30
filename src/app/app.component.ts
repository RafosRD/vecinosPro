import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PerfilPage } from '../pages/perfil/perfil';
// import { RegistrarsePage } from '../pages/registrarse/registrarse';
import { RegistrarsePage } from '../pages/registrarse/registrarse';
import { AnunciosPage } from '../pages/anuncios/anuncios';
import { AnuncioPage } from '../pages/anuncio/anuncio';
import { AnuncioNuevoPage } from '../pages/anuncio-nuevo/anuncio-nuevo';
// import { AnunciosPage } from '../pages/anuncios/anuncios';
import { PagosPage } from '../pages/pagos/pagos';
import { PagoPage } from '../pages/pago/pago';
import { PagoNuevoPage } from '../pages/pago-nuevo/pago-nuevo';
import { TransaccionesPage } from '../pages/transacciones/transacciones';
import { TransacciNNuevaPage } from '../pages/transacci-nnueva/transacci-nnueva';
// import { TransaccionesPage } from '../pages/transacciones/transacciones';
import { TransaccionPage } from '../pages/transaccion/transaccion';
import { EdificiosPage } from '../pages/edificios/edificios';
// import { EdificioPage } from '../pages/edificio/edificio';
import { BloquePage } from '../pages/bloque/bloque';
// import { PerfilPage } from '../pages/perfil/perfil';
import { PerfilesPage } from '../pages/perfiles/perfiles';
// import { BloquePage } from '../pages/bloque/bloque';
// import { PerfilPage } from '../pages/perfil/perfil';
import { BloqueNuevoPage } from '../pages/bloque-nuevo/bloque-nuevo';
import { EdificioPage } from '../pages/edificio/edificio';
import { NuevoEdificioPage } from '../pages/nuevo-edificio/nuevo-edificio';
// import { EdificiosPage } from '../pages/edificios/edificios';
// import { AnunciosPage } from '../pages/anuncios/anuncios';
import { QuejasPage } from '../pages/quejas/quejas';
import { NuevaQuejaPage } from '../pages/nueva-queja/nueva-queja';
// import { QuejasPage } from '../pages/quejas/quejas';
import { QuejaPage } from '../pages/queja/queja';


import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerfilPage);
  }goToRegistrarse(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RegistrarsePage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  // }goToRegistrarse(params){
  //   if (!params) params = {};
  //   this.navCtrl.setRoot(RegistrarsePage);
  }goToAnuncios(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AnunciosPage);
  }goToAnuncio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AnuncioPage);
  }goToAnuncioNuevo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AnuncioNuevoPage);
  // }goToAnuncios(params){
  //   if (!params) params = {};
  //   this.navCtrl.setRoot(AnunciosPage);
  }goToPagos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PagosPage);
  }goToPago(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PagoPage);
  }goToPagoNuevo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PagoNuevoPage);
  }goToTransacciones(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TransaccionesPage);
  }goToTransacciNNueva(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TransacciNNuevaPage);
  // }goToTransacciones(params){
  //   if (!params) params = {};
  //   this.navCtrl.setRoot(TransaccionesPage);
  }goToTransaccion(params){
    if (!params) params = {};
    this.navCtrl.setRoot(TransaccionPage);
  }goToEdificios(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EdificiosPage);
  }goToEdificio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EdificioPage);
  }goToBloque(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BloquePage);
  // }goToPerfil(params){
  //   if (!params) params = {};
  //   this.navCtrl.setRoot(PerfilPage);
  }goToPerfiles(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerfilesPage);
  // }goToBloque(params){
  //   if (!params) params = {};
  //   this.navCtrl.setRoot(BloquePage);
  // }goToPerfil(params){
  //   if (!params) params = {};
  //   this.navCtrl.setRoot(PerfilPage);
  }goToBloqueNuevo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BloqueNuevoPage);
  // }goToEdificio(params){
  //   if (!params) params = {};
  //   this.navCtrl.setRoot(EdificioPage);
  }goToNuevoEdificio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NuevoEdificioPage);
  // }goToEdificios(params){
  //   if (!params) params = {};
  //   this.navCtrl.setRoot(EdificiosPage);
  // }goToAnuncios(params){
  //   if (!params) params = {};
  //   this.navCtrl.setRoot(AnunciosPage);
  }goToQuejas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QuejasPage);
  }goToNuevaQueja(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NuevaQuejaPage);
  // }goToQuejas(params){
  //   if (!params) params = {};
  //   this.navCtrl.setRoot(QuejasPage);
  }goToQueja(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QuejaPage);
  }
}
