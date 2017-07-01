import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class EdificiosService{

  perfilBloque = {id:null, perfilId:null, bloqueId:null};


  constructor(public afDB: AngularFireDatabase){

  }

  public getEdificios(){
    return this.afDB.list('edificios/')
  }
  public getEdificio(id){
    return this.afDB.object('edificios/'+id);
  }
  public createEdificios(edificio){
    edificio.id = this.afDB.database.ref().child('edificios').push().key
    this.afDB.database.ref('edificios/'+ edificio.id).set(edificio);
  }
  public editEdificios(edificio){
    this.afDB.database.ref('edificios/'+ edificio.id).set(edificio);
  }
  public deleteEdificios(edificio){

    this.afDB.database.ref('edificios/'+ edificio.id).remove(edificio);
  }
  public getEdificiosByAdminId(adminId){
    return this.afDB.database.ref('edificios/').orderByChild('adminId').equalTo(adminId)

  }

  //BLOQUES

  public getBloques(edificioId){
    return this.afDB.database.ref('bloques/').orderByChild('edificioId').equalTo(edificioId)
  }

  public getBloque(id){
    return this.afDB.object('bloques/'+id);
  }

  public createBloque(bloque){
    bloque.id = this.afDB.database.ref().child('bloques').push().key
    this.afDB.database.ref('bloques/'+ bloque.id).set(bloque);
  }

  public addPerfilToBloque(perfilId,bloqueId){

    this.perfilBloque.id = this.afDB.database.ref().child('perfilBloque').push().key
    this.perfilBloque.perfilId = perfilId
    this.perfilBloque.bloqueId = bloqueId


    this.afDB.database.ref('perfilBloque/'+this.perfilBloque.id).set(this.perfilBloque);

  }

  public getPerfilesBloques(bloqueId){
    return this.afDB.database.ref('perfilBloque/').orderByChild('bloqueId').equalTo(bloqueId)
  }
}
