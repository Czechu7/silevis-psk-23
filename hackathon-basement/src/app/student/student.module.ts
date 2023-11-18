import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { StudentRoutingModule } from './admin-routing.module';
import { ChangeDateComponent } from './change-date/change-date.component';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';
import { StudentDocsComponent } from './components/student-docs/student-docs.component';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    StudentFormComponent,
    ChangeDateComponent,
    StudentDocsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    StudentRoutingModule,
    TriStateCheckboxModule,
    CardModule,
    DropdownModule,
    BrowserAnimationsModule,
  ],
  exports: [StudentFormComponent],
})
export class StudentModule {}
