import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { SecondProduct } from '../second-product';
import {ProductserviceService} from '../productservice.service'
import { GadgetserviceService } from '../gadgetservice.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
    orderedProducts: Products[] =[]
    orderedItem : SecondProduct[] =[]
    public ifclicked = false 
    item=0
  constructor(private fs:ProductserviceService, private gs:GadgetserviceService) { }

  ngOnInit(): void {
   this.orderedProducts = this.fs.getOrders()
   this.orderedItem = this.gs.getGadgets()
  }
   clicked(){
     this.ifclicked= true;
   }
   product(type:string){

       type==='add'?this.item++:this.item--;
   }
}
