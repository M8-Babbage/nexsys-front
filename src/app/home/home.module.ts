import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [ProductsComponent, DetailsComponent],
  imports: [
    CommonModule, HomeRoutingModule, SharedModule, PrimeNgModule
  ],
})
export class HomeModule { }
