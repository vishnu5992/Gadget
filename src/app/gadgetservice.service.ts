import { Injectable } from '@angular/core';
import { SecondProduct } from './second-product';
@Injectable({
  providedIn: 'root'
})
export class GadgetserviceService {

  constructor() { }
  orderedGadget : SecondProduct[]=[]
  getGadgets():SecondProduct[]{
      return this.orderedGadget
  }
}
