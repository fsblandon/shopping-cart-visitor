import { BookComponent } from "../elements/book/book.component";
import { FruitComponent } from "../elements/fruit/fruit.component";

export interface ShoppingCartVisitor {
  visit1: (fruit: FruitComponent) => number;
  visit2: (book: BookComponent) => number;
}
