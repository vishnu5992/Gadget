import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
     
  constructor() { }
  orderedItem : Products[] =[]
   getOrders():Products[]{
     return this.orderedItem
   }
}
