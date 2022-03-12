import { ShoppingCartVisitor } from "./shopping-cart-visitor.model";

export interface ItemElement {
  accept: (visitor: ShoppingCartVisitor) => number;
}
