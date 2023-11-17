import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfCreatorComponent } from './tests/pdf-creator/pdf-creator.component';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';


@NgModule({
  declarations: [
    AppComponent,
    PdfCreatorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
