import { Component, OnInit } from '@angular/core';
import { BookComponent } from 'src/app/elements/book/book.component';
import { FruitComponent } from 'src/app/elements/fruit/fruit.component';
import { ShoppingCartVisitor } from 'src/app/model/shopping-cart-visitor.model';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements ShoppingCartVisitor {

  constructor() { }

  visit1(fruit: FruitComponent): number {
    let cost = fruit.getPricePerKg()*fruit.getWeight();

    console.log(fruit.getName() + ' Cost= ' + cost);
    return cost;
  };

  visit2(book: BookComponent): number {
    let cost: number = 0;
    //Apply $5 discount if book price > 50;
    book.getPrice() > 50 ? cost = book.getPrice()-5 : cost = book.getPrice();

    console.log('Book ISBN: ' + book.getIsbnNumber() + ' Cost = ' + cost);
    return cost;
  };

}
