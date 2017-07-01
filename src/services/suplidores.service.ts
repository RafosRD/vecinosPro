import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class SuplidoresService{

  perfilCalificacion = {id:null, perfilId:null, calificacionId:null};


  constructor(public afDB: AngularFireDatabase){

  }

  public getSuplidores(){
    return this.afDB.list('suplidores/')
  }
  public getSuplidor(id){
    return this.afDB.object('suplidores/'+id);
  }
  public createSuplidor(suplidor){
    suplidor.id = this.afDB.database.ref().child('suplidores').push().key
    this.afDB.database.ref('suplidores/'+ suplidor.id).set(suplidor);
  }
  public editSuplidores(suplidor){
    this.afDB.database.ref('suplidores/'+ suplidor.id).set(suplidor);
  }
  public deleteSuplidores(suplidor){

    this.afDB.database.ref('suplidores/'+ suplidor.id).remove(suplidor);
  }
  public getSuplidoresByAdminId(adminId){
    return this.afDB.database.ref('suplidores/').orderByChild('adminId').equalTo(adminId)

  }

  //calificaciones

  public getCalificaciones(suplidorId){
    return this.afDB.database.ref('calificaciones/').orderByChild('suplidorId').equalTo(suplidorId)
  }

  public getCalificacion(id){
    return this.afDB.object('calificaciones/'+id);
  }

  public createCalificacion(calificacion){
    calificacion.id = this.afDB.database.ref().child('calificaciones').push().key
    this.afDB.database.ref('calificaciones/'+ calificacion.id).set(calificacion);
  }


  public getPerfilesCalificaciones(calificacionId){
    return this.afDB.database.ref('perfilCalificacion/').orderByChild('calificacionId').equalTo(calificacionId)
  }
}
