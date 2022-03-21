import { Component, OnInit } from '@angular/core';
import {bestGadgets} from  '../Best-gadgets'
import { Products } from '../products';
import {ProductserviceService} from '../productservice.service'
import { computerGadgets } from '../computerGadgets';
import{SecondProduct}from '../second-product';
import { GadgetserviceService } from '../gadgetservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
      popularproduct = bestGadgets
      fliteredproduct: Products[] = []
      populargadget = computerGadgets
      filteredgadget: SecondProduct[]=[]
    Bestproducts=[
       {
         imgUrl:"https://pngimg.com/uploads/watches/watches_PNG101454.png",
         name: "watches"
       },
       {
        imgUrl:"https://www.freepnglogos.com/uploads/airpods-png/imagic-baroda-airpods-5.png",
         name:"Airpods"
       },
       {
         imgUrl:"https://freepngimg.com/thumb/technology/52390-8-red-bluetooth-speaker-image-download-free-image.png",
         name:"Bluetooth speakers"
       },
       {
         imgUrl:"https://www.pngfind.com/pngs/m/560-5605967_huawei-p30-lite-glass-screen-protector-smartphone-hd.png",
         name:"Screen protector"
       }

    ]
    secondProducts=[
      {
        imgUrl:"https://cdn.shopify.com/s/files/1/0057/8938/4802/products/boat-micro-usb-black_1024x1024.png?v=1613457303",
        name:"usb"
      },
      {    
        imgUrl:"https://w7.pngwing.com/pngs/769/710/png-transparent-laptop-cooler-computer-system-cooling-parts-trust-mac-book-pro-laptop-angle-electronics-computer.png",
        name:"coolpad"
      },
      {
        imgUrl:"https://www.freepnglogos.com/uploads/mouse-png/mouse-get-advice-richmond-39.png",
        name:"mouse"
      },
      {
        imgUrl:"https://pngimg.com/uploads/keyboard/keyboard_PNG5865.png",
        name:"keyboard"
      }
    ]
    stars=[
      {
        starImg:"https://p.kindpng.com/picc/s/729-7297406_5-star-rating-png-png-download-golgi-apparatus.png"
      },

    ]


  constructor(private fs: ProductserviceService,private gs: GadgetserviceService) { }

  ngOnInit(): void {
  }
     onClick( product :any){
        this.fliteredproduct = this.popularproduct.filter(i => i.productType == product.name)
     }
     addtoCart(pro:any){
       this.fs.orderedItem.push(pro)
     }
     onSelect(cg:any){
       this.filteredgadget = this.populargadget.filter(i => i.productType==cg.name)
     }
   addGadget(filter:any){
        this.gs.orderedGadget.push(filter)
   }
    }