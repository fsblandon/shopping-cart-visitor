import { Component, Inject, OnInit } from '@angular/core';
import { ItemElement } from 'src/app/model/item-element.model';
import { ShoppingCartVisitor } from 'src/app/model/shopping-cart-visitor.model';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements ItemElement {

  public pricePerKg: number;
  public weight: number;
  public name: string;

  constructor(
    @Inject(null) public priceKg: number,
    @Inject(null) public wt: number,
    @Inject(null) public nm: string
  ) {
    this.pricePerKg = priceKg;
    this.weight = wt;
    this.name = nm;
  }
  getPricePerKg() {
    return this.pricePerKg;
  }

  getWeight() {
    return this.weight;
  }

  getName() {
    return this.name;
  }

  accept(visitor: ShoppingCartVisitor) {
    return visitor.visit1(this);
  }


}
