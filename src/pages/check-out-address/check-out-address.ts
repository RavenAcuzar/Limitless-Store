import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckOutPaymentPage } from "../check-out-payment/check-out-payment";

/**
 * Generated class for the CheckOutAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-check-out-address',
  templateUrl: 'check-out-address.html',
})
export class CheckOutAddressPage {
  billAddShipAdd :boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckOutAddressPage');
  }
  proceedPayment(){
    this.navCtrl.push(CheckOutPaymentPage);
  }
  changeBillAddVal(){
    //do something
  }

}
