import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class CategoriasService{

  constructor(public afDB: AngularFireDatabase){

  }
  public getCategorias(){
    return this.afDB.list('categorias/')
  }
  public getCategoria(id){
    return this.afDB.object('categorias/'+id);
  }
  public createCategoria(categoria){
    //categoria.id = this.afDB.database.ref().child('categorias').push().key;
    this.afDB.database.ref('categorias/'+ categoria.id).set(categoria);
  }
  public editCategoria(categoria){
    this.afDB.database.ref('categorias/'+ categoria.id).set(categoria);
  }
  public deleteCategoria(categoria){

    this.afDB.database.ref('categorias/'+ categoria.id).remove(categoria);
  }

}
