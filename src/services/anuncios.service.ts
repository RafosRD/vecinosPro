import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {PerfilesService} from "./perfiles.service";

@Injectable()
export class AnunciosService{
  anuncios = []
  constructor(public afDB: AngularFireDatabase, public AngularFireAuth:AngularFireAuth, public PerfilesService:PerfilesService){

  }
  public getAnuncios(){
    return this.afDB.list('anuncios/')
  }
  public getAnuncio(id){
    return this.afDB.object('anuncios/'+id);
  }
  public createAnuncio(anuncio){
    anuncio.id = this.afDB.database.ref().child('anuncios').push().key;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    var todaystr = mm + '/' + dd + '/' + yyyy;
    anuncio.fecha =  todaystr


    this.afDB.database.ref('anuncios/'+anuncio.id).set(anuncio);
  }
  public editAnuncio(anuncio){
    this.afDB.database.ref('anuncios/'+anuncio.id).set(anuncio);
  }
  public deleteAnuncio(anuncio){

    this.afDB.database.ref('anuncios/'+anuncio.id).remove(anuncio);
  }
  public getAnunciosByEdificioId(edificioId){
    return this.afDB.database.ref('anuncios/').orderByChild('edificioId').equalTo(edificioId);

  }

  public getAnunciosByUserId(userId){
    return this.afDB.database.ref('anuncios/').orderByChild('userId').equalTo(userId);

  }

}
