import { ViewController, NavController, NavParams } from "ionic-angular";
import { Component, ElementRef } from "@angular/core";

@Component({
    template: `
    <div style="text-align:center; font-family:'Avenir Next'; letter-spacing:3px;">
    <h6> Quantity</h6>
    <ion-grid>
        <ion-row align-items-center>
            <ion-col (click)="subQty()" style="font-size:30px;">
                    <ion-icon name="ios-remove-circle-outline"></ion-icon>
            </ion-col>
            <ion-col>
                <input [value]="qty" type="number" readonly="true" style="width:100%; height:100%; font-size:25px; text-align:center;" />
            </ion-col>
            <ion-col (click)="addQty()" style="font-size:30px;">
                    <ion-icon name="ios-add-circle-outline"></ion-icon>
            </ion-col>
        </ion-row>
        <ion-row style="margin-top:30px;">
            <ion-col style="text-align:center;" (click)="confirm()">
                OK
            </ion-col>
            <ion-col style="text-align:center; color:red;" (click)="close()">
                Cancel
            </ion-col>
        </ion-row>
    </ion-grid>
    </div>
  `
})
export class QtyPopoverPage {
    public qty: number = 1;
    constructor(
        private navCtrl: NavController,
        private viewCtrl: ViewController,
        private navParams: NavParams
    ) {
        this.qty = this.navParams.data.qty;
    }
    ionViewDidLoad() {
        document.getElementsByTagName("ion-app").item(0).classList.add("disable-scroll");
    }

    ionViewWillLeave() {
        if (document.getElementsByTagName("ion-app").item(0).classList.contains("disable-scroll"))
            document.getElementsByTagName("ion-app").item(0).classList.remove("disable-scroll");
    }

    subQty() {
        if (this.qty > 1) {
            this.qty--;
        }
    }
    addQty() {
        this.qty++;
    }
    close() {
        this.viewCtrl.dismiss(null).catch(() => { });
    }

    confirm() {
        this.viewCtrl.dismiss(this.qty).catch(() => { });
    }

}

//-------------------COLOR PICKER POPOVER---------------------------------------

@Component({
    template: `
        <ion-grid radio-group>
            <ion-row class="row-dots">
                    <ion-col>
                        <button ion-button="dot" (click)="changeBackground('white')" class="dot-white" [class.selected]="color == 'white'"></button>
                    </ion-col>
                    <ion-col>
                        <button ion-button="dot" (click)="changeBackground('tan')" class="dot-tan" [class.selected]="color == 'tan'"></button>
                    </ion-col>
                    <ion-col>
                        <button ion-button="dot" (click)="changeBackground('grey')" class="dot-grey" [class.selected]="color == 'grey'"></button>
                    </ion-col>
                    <ion-col>
                        <button ion-button="dot" (click)="changeBackground('black')" class="dot-black" [class.selected]="color == 'black'"></button>
                    </ion-col>
            </ion-row>
        </ion-grid>
  `
})
export class ColorPopoverPage {
    colors = {
        'white': {
            'bg': 'rgb(255, 255, 255)'
        },
        'tan': {
            'bg': 'rgb(249, 241, 228)'   
        },
        'grey': {
            'bg': 'rgb(76, 75, 80)'
        },
        'black': {
            'bg': 'rgb(0, 0, 0)' 
        },
    };
    color:string="black";
    colorBtn: any;
    constructor(
        private navCtrl: NavController,
        private viewCtrl: ViewController,
        private navParams: NavParams
    ) {
        this.colorBtn=this.navParams.data.element;
    }
    ionViewDidLoad() {
        document.getElementsByTagName("ion-app").item(0).classList.add("disable-scroll");
    }

    ionViewWillLeave() {
        if (document.getElementsByTagName("ion-app").item(0).classList.contains("disable-scroll"))
            document.getElementsByTagName("ion-app").item(0).classList.remove("disable-scroll");
    }
    changeBackground(color) {
        this.color=color;
        this.colorBtn.style.backgroundColor = this.colors[color].bg;
    }
}


//---------------------SIZE PICKER POPOVER-------------------------------------------------------

@Component({
    template: `
        <ion-list no-lines [(ngModel)]="size" radio-group >
            <ion-item>
                <ion-label>XS</ion-label>
                <ion-radio value="XS" (click)="changeSize()"></ion-radio>
            </ion-item>
            <ion-item class="text-charter">
                <ion-label>S</ion-label>
                <ion-radio value="S" (click)="changeSize()"></ion-radio>
            </ion-item>
            <ion-item class="text-iowan">
                <ion-label>M</ion-label>
                <ion-radio value="M" (click)="changeSize()"></ion-radio>
            </ion-item>
            <ion-item class="text-palatino">
                <ion-label>L</ion-label>
                <ion-radio value="L" (click)="changeSize()"></ion-radio>
            </ion-item>
            <ion-item class="text-san-francisco">
                <ion-label>XL</ion-label>
                <ion-radio value="XL" (click)="changeSize()"></ion-radio>
            </ion-item>
        </ion-list>
  `
})
export class SizePopoverPage {
    size:string="XS";
    sizeBtn:any;
    constructor(
        private navCtrl: NavController,
        private viewCtrl: ViewController,
        private navParams: NavParams
    ) {
        this.size= this.navParams.data.size;
    }
    ionViewDidLoad() {
        document.getElementsByTagName("ion-app").item(0).classList.add("disable-scroll");
    }

    ionViewWillLeave() {
        if (document.getElementsByTagName("ion-app").item(0).classList.contains("disable-scroll"))
            document.getElementsByTagName("ion-app").item(0).classList.remove("disable-scroll");
    }
    changeSize() {
        this.viewCtrl.dismiss(this.size).catch(() => { });
        console.log("Size changed "+this.size);
    }
}

