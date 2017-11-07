import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';
import { CheckOutConfirmPage } from "../check-out-confirm/check-out-confirm";
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

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
  @ViewChild(Navbar) navBar: Navbar;
  payment:string="cod";
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private nativePageTransitions:NativePageTransitions) {
  }

  ionViewDidLoad() {
    this.navBar.backButtonClick =()=>{
      let options: NativeTransitionOptions = {
        direction: 'right',
        duration: 200,
        slowdownfactor: 0,
        iosdelay: 0
       };
    
     this.nativePageTransitions.slide(options)
     .then(success=>{})
     .catch(onError =>{});
     this.navCtrl.pop({animate:false});
    }
  }

  proceedPayment(){
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 200,
      slowdownfactor: 0,
      iosdelay: 0
     };
  
   this.nativePageTransitions.slide(options)
   .then(success=>{})
   .catch(onError =>{});
    this.navCtrl.push(CheckOutConfirmPage,{},{animate:false});
  }

}
