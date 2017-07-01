import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {PerfilesService} from "./perfiles.service";

@Injectable()
export class QuejasService{
  quejas = []
  constructor(public afDB: AngularFireDatabase, public AngularFireAuth:AngularFireAuth, public PerfilesService:PerfilesService){

  }
  public getQuejas(){
    return this.afDB.list('quejas/')
  }
  public getQueja(id){
    return this.afDB.object('quejas/'+id);
  }
  public createQueja(queja){
    queja.id = this.afDB.database.ref().child('quejas').push().key;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var todaystr = mm + '/' + dd + '/' + yyyy;
    queja.fecha =  todaystr
    this.afDB.database.ref('quejas/'+queja.id).set(queja);
  }
  public editQueja(queja){
    this.afDB.database.ref('quejas/'+queja.id).set(queja);
  }
  public deleteQueja(queja){

    this.afDB.database.ref('quejas/'+queja.id).remove(queja);
  }

}
