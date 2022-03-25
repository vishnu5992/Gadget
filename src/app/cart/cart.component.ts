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
    cartItemCount =0
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
 getCartItemCount(){
   this.cartItemCount = this.orderedProducts.length
 }
 getCartGadgetCount(){
   
 }
 delete(index:any){
 let confrimDelete = confirm('Are you sure you want to delete')
 if(confrimDelete==true){
 this.orderedProducts.splice(index,1)  
 this.getCartItemCount()
 }
 }
 deletegadget(index:any){
   let confrimDelete = confirm('Are you sure want to delete')
   if(confrimDelete==true){
     this.orderedItem.splice(index,1)
   }
 }
}

