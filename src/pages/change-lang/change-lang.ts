import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SplashnextPage } from "../splashnext/splashnext";
/**
 * Generated class for the ChangeLangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-change-lang',
  templateUrl: 'change-lang.html',
})
export class ChangeLangPage {

  SplashnextPage = SplashnextPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangeLangPage');
  }

}
