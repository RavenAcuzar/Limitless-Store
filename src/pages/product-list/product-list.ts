import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProductPrevPage } from '../product-prev/product-prev';

/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {
  pageTitle:string;
  sex:string;
  bannerImg:string;
  bSellers: Array<{ index: string, image: string, name: string, price: string }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageTitle=this.navParams.get('title');
    this.bannerImg=this.navParams.get('img');
    this.sex=this.navParams.get('sex');
    this.bSellers = [
      { index: "0", image: "./assets/img/sample_img3.jpg", name: "Lorem Ipsum", price: "20.00" },
      { index: "1", image: "./assets/img/sample_img4.jpg", name: "Lorem Ipsum do", price: "30.00" },
      { index: "2", image: "./assets/img/sample_img5.jpg", name: "Lorem dolore et", price: "40.00" },
      { index: "3", image: "./assets/img/sample_img6.jpg", name: "Lorem Ipsum dolore et", price: "50.00" },
      { index: "4", image: "./assets/img/sample_img7.jpg", name: "Lorem Ipsum dol", price: "60.00" },
      { index: "5", image: "./assets/img/sample_img8.jpg", name: "Lorem Ipsuore et", price: "100.00" }
    ]
  }
  goToProdPrev(event, init) {
    if (event.currentTarget.id == "bseller") {
      this.navCtrl.push(ProductPrevPage, {
        bsellers: this.bSellers,
        initial: init,
        title: "BEST SELLERS"
      }); 
    }
    else if(event.currentTarget.id == "narrive"){
      this.navCtrl.push(ProductPrevPage, {
        bsellers: this.bSellers,
        initial: init,
        title: "NEW ARRIVALS"
      });
    }
    else if(event.currentTarget.id == "allprod"){
      this.navCtrl.push(ProductPrevPage, {
        bsellers: this.bSellers,
        initial: init,
        title: "ALL PRODUCTS"
      });
    }
  }
  ionViewDidLoad() {
    
  }

}
