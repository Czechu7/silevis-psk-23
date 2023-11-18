import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { BadgeModule } from 'primeng/badge';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './partials/header/header.component';
import { TranslateModule } from '@ngx-translate/core'; // Import TranslateModule
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TabMenuModule,
    BadgeModule,
    HttpClientModule,
    TranslateModule,
    MenuModule,
    ToastModule,
  ],
  exports: [HeaderComponent],
})
export class CoreModule {}
