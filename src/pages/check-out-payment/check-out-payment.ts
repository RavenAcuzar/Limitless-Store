import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckOutConfirmPage } from "../check-out-confirm/check-out-confirm";

/**
 * Generated class for the CheckOutPaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-check-out-payment',
  templateUrl: 'check-out-payment.html',
})
export class CheckOutPaymentPage {

  payment:string="cod";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckOutPaymentPage');
  }

  proceedPayment(){
    this.navCtrl.push(CheckOutConfirmPage);
  }

}
