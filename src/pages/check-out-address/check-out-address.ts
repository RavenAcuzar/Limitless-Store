import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CheckOutPaymentPage } from "../check-out-payment/check-out-payment";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private nativePageTransitions: NativePageTransitions) {
  }

  ionViewDidLoad() {
  }
  proceedPayment(){
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 200,
      slowdownfactor: 0,
      iosdelay: 0
     };
    this.nativePageTransitions.slide(options);
    this.navCtrl.push(CheckOutPaymentPage,{},{animate:false});
  }
  changeBillAddVal(){
    //do something
  }

}
