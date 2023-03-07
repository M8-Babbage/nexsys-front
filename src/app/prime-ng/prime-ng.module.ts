import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
  ]
})
export class PrimeNgModule { }
