import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { LoginPage } from "../login/login";

/**
 * Generated class for the EditorialsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-editorials',
  templateUrl: 'editorials.html',
})
export class EditorialsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditorialsPage');
  }
  goToLogin(){
    this.navCtrl.push(LoginPage);
  }
}
