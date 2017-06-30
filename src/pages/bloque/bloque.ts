import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PerfilPage } from '../perfil/perfil';
import { RegistrarsePage } from '../registrarse/registrarse';
import { LoginPage } from '../login/login';
// import { RegistrarsePage } from '../registrarse/registrarse';
import { AnunciosPage } from '../anuncios/anuncios';
import { AnuncioPage } from '../anuncio/anuncio';
import { AnuncioNuevoPage } from '../anuncio-nuevo/anuncio-nuevo';
// import { AnunciosPage } from '../anuncios/anuncios';
import { PerfilesPage } from '../perfiles/perfiles';
// import { BloquePage } from '../bloque/bloque';
// import { PerfilPage } from '../perfil/perfil';

@Component({
  selector: 'page-bloque',
  templateUrl: 'bloque.html'
})
export class BloquePage {

  constructor(public navCtrl: NavController) {
  }
  goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.push(PerfilPage);
  }goToRegistrarse(params){
    if (!params) params = {};
    this.navCtrl.push(RegistrarsePage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  // }goToRegistrarse(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(RegistrarsePage);
  }goToAnuncios(params){
    if (!params) params = {};
    this.navCtrl.push(AnunciosPage);
  }goToAnuncio(params){
    if (!params) params = {};
    this.navCtrl.push(AnuncioPage);
  }goToAnuncioNuevo(params){
    if (!params) params = {};
    this.navCtrl.push(AnuncioNuevoPage);
  // }goToAnuncios(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(AnunciosPage);
  // }goToPerfiles(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(PerfilesPage);
  }goToBloque(params){
    if (!params) params = {};
    this.navCtrl.push(BloquePage);
  // }goToPerfil(params){
  //   if (!params) params = {};
  //   this.navCtrl.push(PerfilPage);
  }
}