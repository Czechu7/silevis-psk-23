import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, AdminRoutingModule, FormsModule],
  exports: [TableComponent],
})
export class AdminModule {}
