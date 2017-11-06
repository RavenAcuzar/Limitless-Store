import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the MyAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-my-account',
  templateUrl: 'my-account.html',
})
export class MyAccountPage {
  shownGroup=null;
  gender = "F";
  disable:boolean =true;
  accDisable:boolean=true;
  birthday = new Date().toISOString();

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyAccountPage');
  }
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};

editDetails(){
  const alert = this.alertCtrl.create({
    title: 'Enter Password to edit',
    inputs: [
      {
        name: 'password',
        placeholder: 'Password',
        type: 'password'
      }
    ],
    buttons: [
      {
        text: 'OK',
        handler: data => {
          // if (/*"check if valid"*/) {
          //   // logged in!
          // } else {
          //   // invalid login
          //   return false;
          // }
          return false;
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  alert.present();
  this.disable= false;
}

saveChanges(){
  this.disable=true;
  this.accDisable=true;
}

editAccount(){
  this.accDisable = false;
}

}
