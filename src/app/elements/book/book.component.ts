import { Component, Inject, OnInit } from '@angular/core';
import { ItemElement } from 'src/app/model/item-element.model';
import { ShoppingCartVisitor } from 'src/app/model/shopping-cart-visitor.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements ItemElement {

  public price: number;
  public isbnNumber: string;

  constructor(
    @Inject(null) public cost: number,
    @Inject(null) public isbn: string
  ) {
    this.price = cost;
    this.isbnNumber = isbn;
  }

  getPrice() {
    return this.price;
  }

  getIsbnNumber() {
    return this.isbnNumber;
  }

  accept(visitor: ShoppingCartVisitor) {
    return visitor.visit2(this);
  };

}
