import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class EdificiosService{


  constructor(public afDB: AngularFireDatabase){

  }

  public getEdificios(){
    return this.afDB.list('edificios/')
  }
  public getEdificio(id){
    return this.afDB.object('edificios/'+id);
  }
  public createEdificios(edificio){
    this.afDB.database.ref('edificios/'+ edificio.id).set(edificio);
  }
  public editEdificios(edificio){
    this.afDB.database.ref('edificios/'+ edificio.id).set(edificio);
  }
  public deleteEdificios(edificio){

    this.afDB.database.ref('edificios/'+ edificio.id).remove(edificio);
  }

  //BLOQUES

  public getBloques(){
    return this.afDB.list('bloques/');
  }

  public getBloquesF(edificioId) {
    this.getBloques()
      .subscribe(bloques => {
        console.log(bloques)
        console.log(bloques.filter(function(e,i){return e.edificioId == edificioId}))
        return bloques.filter(function(e,i){return e.edificioId == edificioId});



      });
  }

  public getBloque(id){
    return this.afDB.object('bloques/'+id);
  }

  public createBloque(bloque){
    this.afDB.database.ref('bloques/'+ bloque.id).set(bloque);
  }
}
