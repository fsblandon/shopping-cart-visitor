import { Component } from '@angular/core';
import { BookComponent } from './elements/book/book.component';
import { FruitComponent } from './elements/fruit/fruit.component';
import { ItemElement } from './model/item-element.model';
import { ShoppingCartVisitor } from './model/shopping-cart-visitor.model';
import { ShoppingCartComponent } from './visitors/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-cart-visitor';

  items: ItemElement[] = [];

  books: BookComponent[] = [
    new BookComponent(20, '1234'),
    new BookComponent(100, "5678"),
    new BookComponent(15, '0000'),
    new BookComponent(30, '1232323'),
  ];

  fruits: FruitComponent[] = [
    new FruitComponent(10, 2, "Banana"),
    new FruitComponent(5, 5, "Apple"),
    new FruitComponent(5, 10, "papaya"),
    new FruitComponent(12, 20, "Aguacate")
  ];

  addToCart(item: ItemElement) {
    this.items.push(item);
    console.log(this.items);
  }

  calculatePrice() {
    let visitor: ShoppingCartVisitor = new ShoppingCartComponent();
    let sum: number = 0;

    for (const item of this.items) {
      sum = sum + item.accept(visitor);
    }

    return sum;
  }
}
