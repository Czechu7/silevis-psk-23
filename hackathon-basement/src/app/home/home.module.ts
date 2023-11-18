import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    TranslateModule
  ],
  exports: [HomePageComponent
  ]
})
export class HomeModule { }
