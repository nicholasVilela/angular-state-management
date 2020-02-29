import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/Models/Product.model'
import * as data from './data.json'
import { Store, Select } from '@ngxs/store'
import { AddToCart } from 'src/app/Actions/app.action.js'
import { Observable } from 'rxjs'
import { CartStateModel, CartState } from 'src/app/State/app.state.js'
import { Cart } from 'src/app/Models/cart.model.js'

@Component({
  selector: 'grid',
  templateUrl: './grid.html',
  styleUrls: ['./../../app.component.css']
})

export class GridComponent implements OnInit{
    constructor(private store: Store) {
      this.store
        .select(x => x.cart.products)
        .subscribe(x => this.cart$ = x)
    }

    public cart$: Cart
    public productList: Product[] = data.map(x => x)

    ngOnInit() {
      console.log(this.productList)
    }

    addToCart(product) {
      this.store.dispatch(new AddToCart(product))
    }
}
