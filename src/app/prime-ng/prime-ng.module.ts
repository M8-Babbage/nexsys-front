import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    SplitterModule
  ]
})
export class PrimeNgModule { }
