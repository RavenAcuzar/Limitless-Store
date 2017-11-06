import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CreateAccountPage } from "../create-account/create-account";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  contType: string = "login";
  public type = 'password';
  public showPass = false;
  public ctype = 'password';
  public showPass2 = false;
  public ltype = 'password';
  public showPass3 = false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  createAccount() {
    this.navCtrl.push(CreateAccountPage);
  }
  showPassword(e) {
    if (e == "0") {
      this.showPass = !this.showPass;

      if (this.showPass) {
        this.type = 'text';
      } else {
        this.type = 'password';
      }
    }
    else if (e == "1") {
      this.showPass2 = !this.showPass2;

      if (this.showPass2) {
        this.ctype = 'text';
      } else {
        this.ctype = 'password';
      }
    }
    else {
      this.showPass3 = !this.showPass3;

      if (this.showPass3) {
        this.ltype = 'text';
      } else {
        this.ltype = 'password';
      }
    }
  }
  goToAccountInfo(){
    this.navCtrl.push(CreateAccountPage);
  }
}
