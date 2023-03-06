import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule, HomeRoutingModule
  ],
})
export class HomeModule { }
