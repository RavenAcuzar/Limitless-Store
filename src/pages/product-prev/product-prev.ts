import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Slides, PopoverController } from 'ionic-angular';
import { CartPage } from "../cart/cart";
import { ColorPopoverPage, SizePopoverPage } from "../../app/popover";

/**
 * Generated class for the ProductPrevPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@Component({
  selector: 'page-product-prev',
  templateUrl: 'product-prev.html',
})
export class ProductPrevPage {

  @ViewChild(Slides) slides: Slides;
  @ViewChild('colorBtn',{read:ElementRef}) colorBtn: ElementRef;
  // @ViewChild('size',{read:ElementRef}) sizeBtn: ElementRef;
  bsellers: any[];
  qty: number = 1;
  init: number;
  prodName: string;
  prodPrice: string;
  title:string;
  img:string;
  size:string="XS";

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private popoverCtrl:PopoverController) {
    this.bsellers = this.navParams.get('bsellers');
    this.init = this.navParams.get('initial');
    this.title= this.navParams.get('title');
    this.prodName = this.bsellers[this.init].name;
    this.prodPrice = this.bsellers[this.init].price;
    this.img = this.bsellers[this.init].image;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPrevPage');
  }

  slideChange() {
    if (this.slides.getActiveIndex()+1<=this.bsellers.length){
      this.prodName = this.bsellers[this.slides.getActiveIndex()].name;
      this.prodPrice = this.bsellers[this.slides.getActiveIndex()].price;
      this.img=this.bsellers[this.slides.getActiveIndex()].image;
    }
  } 
  goToCart(){
    this.navCtrl.push(CartPage);
  }
  showColorPop(ev:UIEvent){
    let popover = this.popoverCtrl.create(ColorPopoverPage,{
      element: this.colorBtn.nativeElement
    });
    popover.present({ev:ev});
    
  }
  showSizePop(ev:UIEvent){
    let popover = this.popoverCtrl.create(SizePopoverPage,{
      size: this.size
    });
    popover.present({ev:ev});
    popover.onDidDismiss(s=>{
      if(s!=null)
      this.size=s;
    });
    
  }

}
