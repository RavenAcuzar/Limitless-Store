import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';
import { HomePage } from "../home/home";
import { OrderTrackingPage } from "../order-tracking/order-tracking";

/**
 * Generated class for the CheckOutConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-check-out-confirm',
  templateUrl: 'check-out-confirm.html',
})
export class CheckOutConfirmPage {

  @ViewChild(Navbar) navBar: Navbar;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckOutConfirmPage');
    this.navBar.backButtonClick = () => {
      this.navCtrl.setRoot(HomePage);
    }
  }
  goToHome(){
    this.navCtrl.setRoot(HomePage)
  }
  goToOrderTracking(){
    this.navCtrl.setRoot(OrderTrackingPage);
  }


}
