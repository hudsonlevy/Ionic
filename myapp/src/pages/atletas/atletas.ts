import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartolaProvider } from '../../providers/cartola/cartola';

/**
 * Generated class for the AtletasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-atletas',
  templateUrl: 'atletas.html',
  providers: [
    CartolaProvider
  ]
})
export class AtletasPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private _cartolaProvider:CartolaProvider
  ) {
  }

  ionViewDidLoad() {
    this._cartolaProvider.atletas().subscribe(data=>{
      console.log(data);
    })
  }

}
