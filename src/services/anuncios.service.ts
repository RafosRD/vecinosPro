import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class AnunciosService{
  anuncios = []
  constructor(public afDB: AngularFireDatabase){

  }
  public getAnuncios(){
    return this.afDB.list('anuncios/')
  }
  public getAnuncio(id){
    return this.afDB.object('anuncios/'+id);
  }
  public createAnuncio(anuncio){
    this.afDB.database.ref('anuncios/'+ anuncio.id).set(anuncio);
  }
  public editAnuncio(anuncio){
    this.afDB.database.ref('anuncios/'+ anuncio.id).set(anuncio);
  }
  public deleteAnuncio(anuncio){

    this.afDB.database.ref('anuncios/'+ anuncio.id).remove(anuncio);
  }

}
