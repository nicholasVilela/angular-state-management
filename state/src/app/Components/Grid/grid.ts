import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/Models/Product.model'
import * as data from './data.json'

@Component({
  selector: 'grid',
  templateUrl: './grid.html',
  styleUrls: ['./../../app.component.css']
})
export class GridComponent implements OnInit{
    public productList: [Product] = data.default


    ngOnInit() {
        console.log(this.productList)
    }
}
