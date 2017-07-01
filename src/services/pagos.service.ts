import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {PerfilesService} from "./perfiles.service";

@Injectable()
export class PagosService{
  pagos = []
  constructor(public afDB: AngularFireDatabase, public AngularFireAuth:AngularFireAuth, public PerfilesService:PerfilesService){

  }
  public getPagos(){
    return this.afDB.list('pagos/')
  }
  public getPago(id){
    return this.afDB.object('pagos/'+id);
  }
  public createPago(pago){
    pago.id = this.afDB.database.ref().child('pagos').push().key;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var todaystr = mm + '/' + dd + '/' + yyyy;
    pago.fecha =  todaystr


    this.afDB.database.ref('pagos/'+pago.id).set(pago);
  }
  public editPago(pago){
    this.afDB.database.ref('pagos/'+pago.id).set(pago);
  }
  public deletePago(pago){

    this.afDB.database.ref('pagos/'+pago.id).remove(pago);
  }

  public getPagosByEdificioId(edificioId){
    return this.afDB.database.ref('pagos/').orderByChild('edificioId').equalTo(edificioId);

  }

  public getPagosByUserId(userId){
    return this.afDB.database.ref('pagos/').orderByChild('userId').equalTo(userId);

  }

}
