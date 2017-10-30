import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { HomePage } from "../home/home";

/**
 * Generated class for the SplashnextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-splashnext',
  templateUrl: 'splashnext.html',
})
export class SplashnextPage {

  hidebtn: boolean=true;
  @ViewChild(Slides) slides: Slides;
  sliderImg: Array <{image:string, title:string, cont:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sliderImg=[
      {image:"./assets/img/slider_bg.jpg", title: "Have your wardrobe match your Limitless style", cont: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur urna rutrum mattis tincidunt."},
      {image:"./assets/img/slider_bg2.png", title: "Shop at the comfort of your own home", cont: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur urna rutrum mattis tincidunt."},
    ]
  }

  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashnextPage');
  }

  showContinueBtn(){
    if(this.slides.isEnd())
    this.hidebtn=false;
    else
      this.hidebtn=true;
  }

}
