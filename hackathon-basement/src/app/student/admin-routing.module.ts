import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterEnum } from 'src/enums/router.enum';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { studentGuard } from '../guards/student.guard';
import { PdfCreatorComponent } from './components/pdf-creator/pdf-creator.component';

const routes: Routes = [
  {
    path: RouterEnum.student,
    component: StudentFormComponent,
    canActivate: [studentGuard],
  },
  {
    path: RouterEnum.file,
    component: PdfCreatorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
