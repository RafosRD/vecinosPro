import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {PerfilesService} from "./perfiles.service";

@Injectable()
export class TransaccionesService{
  transacciones = []
  constructor(public afDB: AngularFireDatabase, public AngularFireAuth:AngularFireAuth, public PerfilesService:PerfilesService){

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

}
