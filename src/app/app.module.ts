import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TransaccionesPage } from '../pages/transacciones/transacciones';
import { PagosPage } from '../pages/pagos/pagos';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { AnunciosPage } from '../pages/anuncios/anuncios';
import { QuejasPage } from '../pages/quejas/quejas';
import { EdificiosPage } from '../pages/edificios/edificios';
import { BloquePage } from '../pages/bloque/bloque';
import { SuplidoresDeServiciosPage } from '../pages/suplidores-de-servicios/suplidores-de-servicios';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { RegistrarsePage } from '../pages/registrarse/registrarse';
import { TransaccionPage } from '../pages/transaccion/transaccion';
import { PagoPage } from '../pages/pago/pago';
import { AnuncioPage } from '../pages/anuncio/anuncio';
import { QuejaPage } from '../pages/queja/queja';
import { CalificacionPage } from '../pages/calificacion/calificacion';
import { SuplidorPage } from '../pages/suplidor/suplidor';
import { EdificioPage } from '../pages/edificio/edificio';
import { TransacciNNuevaPage } from '../pages/transacci-nnueva/transacci-nnueva';
import { NuevaQuejaPage } from '../pages/nueva-queja/nueva-queja';
import { PagoNuevoPage } from '../pages/pago-nuevo/pago-nuevo';
import { CalificacionNuevaPage } from '../pages/calificacion-nueva/calificacion-nueva';
import { BloqueNuevoPage } from '../pages/bloque-nuevo/bloque-nuevo';
import { NuevoEdificioPage } from '../pages/nuevo-edificio/nuevo-edificio';
import { AnuncioNuevoPage } from '../pages/anuncio-nuevo/anuncio-nuevo';
import { PerfilPage } from '../pages/perfil/perfil';
import {AnunciosService} from "../services/anuncios.service";
import {PerfilesService} from "../services/perfiles.service";
import {LoginService} from "../services/login.service";
import {EdificiosService} from "../services/edificios.service";
import {TransaccionesService} from "../services/transacciones.service";
import {PagosService} from "../services/pagos.service";
import {QuejasService} from "../services/quejas.service";
import {SuplidoresService} from "../services/suplidores.service";
import {CategoriasService} from "../services/categorias.service";
import {CategoriasSuplidoresImportFB} from "../services/categorias-suplidores"










import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';







import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


export const firebaseConfig = {
  apiKey: "AIzaSyA1NkA5bFwZDGwVIhCrY16HelDvfUooCLQ",
  authDomain: "vecinospro-6d46c.firebaseapp.com",
  databaseURL: "https://vecinospro-6d46c.firebaseio.com",
  storageBucket: "vecinospro-6d46c.appspot.com",
  messagingSenderId: '366563813191'
};

@NgModule({
  declarations: [
    MyApp,
    TransaccionesPage,
    PagosPage,
    PerfilesPage,
    AnunciosPage,
    QuejasPage,
    EdificiosPage,
    BloquePage,
    SuplidoresDeServiciosPage,
    TabsControllerPage,
    LoginPage,
    RegistrarsePage,
    TransaccionPage,
    PagoPage,
    AnuncioPage,
    QuejaPage,
    CalificacionPage,
    SuplidorPage,
    EdificioPage,
    TransacciNNuevaPage,
    NuevaQuejaPage,
    PagoNuevoPage,
    CalificacionNuevaPage,
    BloqueNuevoPage,
    NuevoEdificioPage,
    AnuncioNuevoPage,
    PerfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TransaccionesPage,
    PagosPage,
    PerfilesPage,
    AnunciosPage,
    QuejasPage,
    EdificiosPage,
    BloquePage,
    SuplidoresDeServiciosPage,
    TabsControllerPage,
    LoginPage,
    RegistrarsePage,
    TransaccionPage,
    PagoPage,
    AnuncioPage,
    QuejaPage,
    CalificacionPage,
    SuplidorPage,
    EdificioPage,
    TransacciNNuevaPage,
    NuevaQuejaPage,
    PagoNuevoPage,
    CalificacionNuevaPage,
    BloqueNuevoPage,
    NuevoEdificioPage,
    AnuncioNuevoPage,
    PerfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AnunciosService,
    PerfilesService,
    LoginService,
    EdificiosService,
    TransaccionesService,
    PagosService,
    QuejasService,
    SuplidoresService,
    CategoriasService,
    CategoriasSuplidoresImportFB,

  ]
})
export class AppModule {}
