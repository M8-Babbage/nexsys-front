import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { SplitterModule } from 'primeng/splitter';

import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

@NgModule({
  exports: [
    ButtonModule,
    MenubarModule,
    SplitterModule,
    MessagesModule,
    MessageModule,
  ]
})
export class PrimeNgModule { }
