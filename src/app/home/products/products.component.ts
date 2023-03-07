import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/platzi.interface';
import { PlatziStoreService } from 'src/app/services/platzi-store.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  // ------- PROPERTIES -------
  public products: Product[] = [];

  offset: number = 0;

  constructor(private platzi: PlatziStoreService) { }

  ngOnInit() {
    this.getAllProducts(this.offset);
  }

  // ------- METHODS -------
  public getAllProducts(offset: number): void {
    this.offset += offset;
    if (this.offset < 0) {
      this.offset = 0;
    }

    this.platzi.getProducts(this.offset).subscribe((products) => {
      console.log(this.offset);
      console.log(products);
      this.products = products;
    });
  }

}
