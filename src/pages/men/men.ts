import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductListPage } from '../product-list/product-list';

/**
 * Generated class for the MenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-men',
  templateUrl: 'men.html',
})
export class MenPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenPage');
  }
  goToProdList(title) {
    if (title.currentTarget.id == "tshirt") {
      this.navCtrl.push(ProductListPage, {
        title: "TOPS & SHIRTS",
        img:"./assets/img/mens_banner.jpg",
        sex:"MEN"
      });
    }
    else if (title.currentTarget.id == "jack") {
      this.navCtrl.push(ProductListPage, {
        title: "JACKETS",
        img:"./assets/img/mens_banner.jpg",
        sex:"MEN"
      });
    }
    else if (title.currentTarget.id == "pants") {
      this.navCtrl.push(ProductListPage, {
        title: "PANTS",
        img:"./assets/img/mens_banner.jpg",
        sex:"MEN"
      });
    }
    else if (title.currentTarget.id == "shorts") {
      this.navCtrl.push(ProductListPage, {
        title: "SHORTS",
        img:"./assets/img/mens_banner.jpg",
        sex:"MEN"
      });
    }
    else if (title.currentTarget.id == "shoes") {
      this.navCtrl.push(ProductListPage, {
        title: "SHOES",
        img:"./assets/img/mens_banner.jpg",
        sex:"MEN"
      });
    }
    else if (title.currentTarget.id == "acc") {
      this.navCtrl.push(ProductListPage, {
        title: "ACCESSORIES",
        img:"./assets/img/mens_banner.jpg",
        sex:"MEN"
      });
    }
  }
}
