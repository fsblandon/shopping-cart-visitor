import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FruitComponent } from './elements/fruit/fruit.component';
import { BookComponent } from './elements/book/book.component';
import { ShoppingCartComponent } from './visitors/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    BookComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
