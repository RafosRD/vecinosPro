import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";
import {AngularFireAuth} from "angularfire2/auth"
import {PerfilesService} from "./perfiles.service";
import { IonicPage, NavController, AlertController } from 'ionic-angular';


@Injectable()

export class LoginService{

  public result

  constructor(public afDB: AngularFireDatabase, public auth:AngularFireAuth, public PerfilesService: PerfilesService, public alertCtrl: AlertController){

  }
  public getPerfiles(){
    return this.afDB.list('perfiles/')
  }
  public getPerfil(email){
    return this.afDB.object('perfiles/'+ email);
  }
  public logout(){

    this.auth.auth.signOut();

  }

  public login(user){


    try{

      const result = this.auth.auth.signInWithEmailAndPassword(user.email, user.password);

      console.error(result);
      return result

    }catch (e){
      console.error(e);

    }




  }

  public registrar(perfil, user){
    try{
      const result = this.auth.auth.createUserWithEmailAndPassword(user.email,user.password).then( newUser => {
        perfil.id = newUser.uid;
        this.PerfilesService.createPerfil(perfil);
      });

      return result

    }catch (e){

      console.log(e)

    }



  }

}
