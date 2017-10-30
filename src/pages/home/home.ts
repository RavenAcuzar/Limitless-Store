import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { CartPage } from "../cart/cart";
import { ProductPrevPage } from "../product-prev/product-prev";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild(Slides) slides: Slides;
  promSlides: Array<{ image: string, title: string, subtitle: string }>;
  bSellers: Array<{ index: string, image: string, name: string, price: string }>;
  pageTitle: string;
  constructor(public navCtrl: NavController) {
    this.promSlides = [
      { image: "./assets/img/sample_img.jpg", title: "DUBAI", subtitle: "DRESSING UP THE DESSERT" },
      { image: "./assets/img/sample_img2.jpg", title: "V-CON MALAYSIA", subtitle: "2017" }
    ]
    this.bSellers = [
      { index: "0", image: "./assets/img/sample_img3.jpg", name: "Lorem Ipsum", price: "20.00" },
      { index: "1", image: "./assets/img/sample_img4.jpg", name: "Lorem Ipsum do", price: "30.00" },
      { index: "2", image: "./assets/img/sample_img5.jpg", name: "Lorem dolore et", price: "40.00" },
      { index: "3", image: "./assets/img/sample_img6.jpg", name: "Lorem Ipsum dolore et", price: "50.00" },
      { index: "4", image: "./assets/img/sample_img7.jpg", name: "Lorem Ipsum dol", price: "60.00" },
      { index: "5", image: "./assets/img/sample_img8.jpg", name: "Lorem Ipsuore et", price: "100.00" }
    ]
  }
  ionViewDidEnter() {
    this.slides.autoplayDisableOnInteraction = false;

  }

  goToProdPrev(event, init) {
    if (event.currentTarget.id == "bseller") {
      this.navCtrl.push(ProductPrevPage, {
        bsellers: this.bSellers,
        initial: init,
        title: "BEST SELLERS"
      }); 
    }
    else if(event.currentTarget.id == "shopTheLook"){
      this.navCtrl.push(ProductPrevPage, {
        bsellers: this.bSellers,
        initial: init,
        title: "SHOP THE LOOK"
      });
    }
    else if(event.currentTarget.id == "newProd"){
      this.navCtrl.push(ProductPrevPage, {
        bsellers: this.bSellers,
        initial: init,
        title: "NEW PRODUCTS"
      });
    }
  }
  goToCart(){
    this.navCtrl.push(CartPage);
  }

}
