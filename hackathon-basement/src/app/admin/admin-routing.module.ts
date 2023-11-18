import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterEnum } from 'src/enums/router.enum';
import { TableComponent } from './table/table.component';
import { adminGuard } from './guards/admin.guard';

const routes: Routes = [
  {
    path: RouterEnum.table,
    component: TableComponent,
    canActivate: [adminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
