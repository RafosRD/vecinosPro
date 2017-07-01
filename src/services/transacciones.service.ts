import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {PerfilesService} from "./perfiles.service";
import {EdificiosService} from "./edificios.service";

@Injectable()
export class TransaccionesService{
  public transacciones = [];
  public perfilbloques = [];
  public userId = false;

  constructor(public afDB: AngularFireDatabase, public AngularFireAuth:AngularFireAuth, public PerfilesService:PerfilesService
    , public EdificiosService:EdificiosService){

  }
  public getTransacciones(){
    return this.afDB.list('transacciones/')
  }
  public getTransaccion(id){
    return this.afDB.object('transacciones/'+id);
  }
  public createTransaccion(transaccion){
    transaccion.id = this.afDB.database.ref().child('transacciones').push().key;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var todaystr = mm + '/' + dd + '/' + yyyy;
    transaccion.fecha =  todaystr


    this.afDB.database.ref('transacciones/'+ transaccion.id).set(transaccion);
  }
  public editTransaccion(transaccion){
    this.afDB.database.ref('transacciones/'+ transaccion.id).set(transaccion);
  }
  public deleteTransaccion(transaccion){

    this.afDB.database.ref('transacciones/'+ transaccion.id).remove(transaccion);
  }
  public getTransaccionesByEdificioId(edificioId){
    return this.afDB.database.ref('transacciones/').orderByChild('edificioId').equalTo(edificioId);

  }

  public getTransaccionesByUserId(userId){
    return this.afDB.database.ref('transacciones/').orderByChild('userId').equalTo(userId);

  }


}
