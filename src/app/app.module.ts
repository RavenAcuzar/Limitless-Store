import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Slides } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { WomenPage } from "../pages/women/women";
import { MenPage } from "../pages/men/men";
import { EditorialsPage } from "../pages/editorials/editorials";
import { WalletPage } from "../pages/wallet/wallet";
import { OrderTrackingPage } from "../pages/order-tracking/order-tracking";
import { MyAccountPage } from "../pages/my-account/my-account";
import { ChangeLangPage } from "../pages/change-lang/change-lang";
import { SplashnextPage } from "../pages/splashnext/splashnext";
import { ProductPrevPage } from "../pages/product-prev/product-prev";
import { CartPage } from "../pages/cart/cart";
import { QtyPopoverPage, ColorPopoverPage, SizePopoverPage } from "./popover";
import { CheckOutConfirmPage } from "../pages/check-out-confirm/check-out-confirm";
import { CheckOutPaymentPage } from "../pages/check-out-payment/check-out-payment";
import { CheckOutAddressPage } from "../pages/check-out-address/check-out-address";
import { LoginPage } from "../pages/login/login";
import { CreateAccountPage } from "../pages/create-account/create-account";
import { ProductListPage } from '../pages/product-list/product-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WomenPage,
    MenPage,
    EditorialsPage,
    WalletPage,
    OrderTrackingPage,
    MyAccountPage,
    ChangeLangPage,
    SplashnextPage,
    ProductPrevPage,
    CartPage,
    QtyPopoverPage,
    CheckOutAddressPage,
    CheckOutPaymentPage,
    CheckOutConfirmPage,
    ColorPopoverPage,
    SizePopoverPage,
    LoginPage,
    CreateAccountPage,
    ProductListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WomenPage,
    MenPage,
    EditorialsPage,
    WalletPage,
    OrderTrackingPage,
    MyAccountPage,
    ChangeLangPage,
    SplashnextPage,
    ProductPrevPage,
    CartPage,
    QtyPopoverPage,
    CheckOutAddressPage,
    CheckOutPaymentPage,
    CheckOutConfirmPage,
    ColorPopoverPage,
    SizePopoverPage,
    LoginPage,
    CreateAccountPage,
    ProductListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Slides
  ]
})
export class AppModule {}
