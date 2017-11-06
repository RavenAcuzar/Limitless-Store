import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';
import { QtyPopoverPage } from "../../app/popover";
import { CheckOutAddressPage } from "../check-out-address/check-out-address";

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  subTotal: number = 0;
  cartCont: Array<{ index: string, image: string, name: string, price: string, qty: string, size:string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    this.cartCont = [
      { index: "0", image: "./assets/img/sample_img4.jpg", name: "Lorem Ipsum do", price: "30.00", qty:"1", size:"XS" },
      { index: "1", image: "./assets/img/sample_img7.jpg", name: "Lorem Ipsum dol", price: "60.00", qty:"1", size:"XS" },
      { index: "2", image: "./assets/img/sample_img8.jpg", name: "Lorem Ipsuore et", price: "100.00", qty:"1", size:"XS" }
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
    this.cartCont.map(e => {
      e.size = String('XS');
      e.qty = String('1');
      return e;
    });
    this.getSubTotal();
  }
  showPopoverQty(ev,index) {
    console.log('Qty Clicked!');
    let popover = this.popoverCtrl.create(QtyPopoverPage, {
      qty: this.cartCont[index].qty
    });
    popover.present(
      {ev:ev}
    );
    popover.onDidDismiss(qty => {
      if(qty!=null)
        this.cartCont[index].qty = qty;
        this.getSubTotal();
    })
  }

  getSubTotal(){
    this.subTotal = 0;
    for (var i = 0; i < this.cartCont.length; i++) {
      this.subTotal += +this.cartCont[i].price * +this.cartCont[i].qty;
    }
  }
  goToCheckout(){
    this.navCtrl.push(CheckOutAddressPage);
  }


}
