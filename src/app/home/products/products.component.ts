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

  constructor(private platzi: PlatziStoreService) { }

  ngOnInit() {
    this.getAllProducts();
  }

  // ------- METHODS -------
  public getAllProducts(): void {
    this.platzi.getProducts().subscribe((products) => {
      console.log(products);
      this.products = products;
    });
  }

}
