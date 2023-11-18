import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { RouterEnum } from 'src/enums/router.enum';
import { StudentFormComponent } from './components/student-form/student-form.component';
import { studentGuard } from '../guards/student.guard';
import { PdfCreatorComponent } from './components/pdf-creator/pdf-creator.component';
import { StudentDocsComponent } from './components/student-docs/student-docs.component';
import { StudentPraktykiComponent } from './components/student-praktyki/student-praktyki.component';

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
  {
    path: RouterEnum.docs,
    component: StudentDocsComponent,
    canActivate: [studentGuard],
  },
  {
    path: `${RouterEnum.files}/:id`,
    component: StudentFormComponent,
    canActivate: [studentGuard],
  },
  {
    path: `${RouterEnum.docs}/praktyki`,
    component: StudentPraktykiComponent,
    canActivate: [studentGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
