import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterEnum } from 'src/enums/router.enum';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  {
    path: RouterEnum.student,
    component: StudentFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
