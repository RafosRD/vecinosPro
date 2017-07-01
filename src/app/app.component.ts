import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PerfilPage } from '../pages/perfil/perfil';
import { RegistrarsePage } from '../pages/registrarse/registrarse';
import { AnunciosPage } from '../pages/anuncios/anuncios';
import { AnuncioPage } from '../pages/anuncio/anuncio';
import { AnuncioNuevoPage } from '../pages/anuncio-nuevo/anuncio-nuevo';
import { PagosPage } from '../pages/pagos/pagos';
import { PagoPage } from '../pages/pago/pago';
import { PagoNuevoPage } from '../pages/pago-nuevo/pago-nuevo';
import { TransaccionesPage } from '../pages/transacciones/transacciones';
import { TransacciNNuevaPage } from '../pages/transacci-nnueva/transacci-nnueva';
import { TransaccionPage } from '../pages/transaccion/transaccion';
import { EdificiosPage } from '../pages/edificios/edificios';
import { BloquePage } from '../pages/bloque/bloque';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { BloqueNuevoPage } from '../pages/bloque-nuevo/bloque-nuevo';
import { EdificioPage } from '../pages/edificio/edificio';
import { NuevoEdificioPage } from '../pages/nuevo-edificio/nuevo-edificio';
import { QuejasPage } from '../pages/quejas/quejas';
import { NuevaQuejaPage } from '../pages/nueva-queja/nueva-queja';
import { QuejaPage } from '../pages/queja/queja';
import {TabsControllerPage} from '../pages/tabs-controller/tabs-controller';
import {LoginService} from '../services/login.service';



import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public LoginService:LoginService) {
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
  }goToAnuncios(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AnunciosPage);
  }goToAnuncio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AnuncioPage);
  }goToAnuncioNuevo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AnuncioNuevoPage);
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
  }goToPerfiles(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerfilesPage);
  }goToBloqueNuevo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BloqueNuevoPage);;
  }goToNuevoEdificio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NuevoEdificioPage);
  }goToQuejas(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QuejasPage);
  }goToNuevaQueja(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NuevaQuejaPage);
  }goToQueja(params){
    if (!params) params = {};
    this.navCtrl.setRoot(QuejaPage);
  }goToTabsControllerPage(params){
  if (!params) params = {};
  this.navCtrl.setRoot(TabsControllerPage);

  }logoutUser(params){
  if (!params) params = {};

    this.LoginService.logout();


  this.navCtrl.setRoot(LoginPage);

}
}
