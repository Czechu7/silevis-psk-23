import { Injectable } from '@angular/core';
import { IStudentForm } from 'src/app/shared/interfaces/IStudentForm.model';

@Injectable({
  providedIn: 'root',
})
export class StudentFormService {
  loggedUserData: IStudentForm;

  handleSubmit(formValue: IStudentForm) {
    this.loggedUserData = formValue;
  }
}
