import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database/database";

@Injectable()
export class PerfilesService{

  constructor(public afDB: AngularFireDatabase){

  }
  public getPerfiles(){
    return this.afDB.list('perfiles/')
  }
  public getPerfil(id){
    return this.afDB.object('perfiles/'+id);
  }
  public createPerfil(perfil){
    this.afDB.database.ref('perfiles/'+ perfil.id).set(perfil);
  }
  public editPerfil(perfil){
    this.afDB.database.ref('perfiles/'+ perfil.id).set(perfil);
  }
  public deletePerfil(perfil){

    this.afDB.database.ref('perfiles/'+ perfil.id).remove(perfil);
  }

}
