import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NuevaQuejaPage } from '../nueva-queja/nueva-queja';
import { QuejaPage } from '../queja/queja';
import {QuejasService} from "../../services/quejas.service";
import {AngularFireAuth} from "angularfire2/auth/auth";
import {EdificiosService} from "../../services/edificios.service";

@Component({
  selector: 'page-quejas',
  templateUrl: 'quejas.html'
})
export class QuejasPage {


  quejas = []
  userId = null

  @ViewChild('myNav') nav:NavController;
  constructor(public navCtrl: NavController, public QuejasService:QuejasService, public AngularFireAuth:AngularFireAuth,
  public EdificiosService:EdificiosService) {
    // QuejasService.getQuejas()
    //   .subscribe(quejas => {
    //     this.quejas = quejas;
    //   });

      this.reloadList()



  }
  goToNuevaQueja(params){
    if (!params) params = {};
    this.navCtrl.push(NuevaQuejaPage,{"parentPage":this});


  }goToQueja(params){
    if (!params) params = {};
    this.navCtrl.push(QuejaPage , {id:params});
  }
  public reloadList(){
      this.AngularFireAuth.authState.subscribe(data =>
          {
              this.userId = data.uid;
              var y = 0

              this.QuejasService.getQuejasByUserId(this.userId)
                  .once('value')
                  .then(snapshot => {

                      for( var i in snapshot.val() ) {
                          this.quejas[y] = snapshot.val()[i];
                          y++;
                      }
                  });



              this.EdificiosService.getEdificiosByAdminId(this.userId)
                  .once('value')
                  .then(snapshot => {
                      for( var i in snapshot.val() ) {
                          this.QuejasService.getQuejasByEdificioId(snapshot.val()[i].id)
                              .once('value')
                              .then(snapshot => {
                                  for( var x in snapshot.val() ) {
                                      if(snapshot.val()[x].userId != this.userId){
                                          this.quejas[y] = snapshot.val()[x];
                                          y++;
                                      }

                                  }});
                      }});
          }
      );
  }
}
