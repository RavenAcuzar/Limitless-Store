import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { WomenPage } from "../pages/women/women";
import { MenPage } from "../pages/men/men";
import { EditorialsPage } from "../pages/editorials/editorials";
import { WalletPage } from "../pages/wallet/wallet";
import { OrderTrackingPage } from "../pages/order-tracking/order-tracking";
import { MyAccountPage } from "../pages/my-account/my-account";
import { ChangeLangPage } from "../pages/change-lang/change-lang";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ChangeLangPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: HomePage },
      { title: 'WOMEN', component: WomenPage },
      { title: 'MEN', component: MenPage },
      { title: 'EDITORIALS', component: EditorialsPage },
      { title: 'WALLET', component: WalletPage },
      { title: 'ORDER TRACKING', component: OrderTrackingPage },
      { title: 'MY ACCOUNT', component: MyAccountPage }
    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
