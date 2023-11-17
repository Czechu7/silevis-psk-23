import { IWorkplace } from './IWorkplace.model';

export interface IStudentForm extends IWorkplace {
  indexNumber: number;
  yearOfStudy: number;
  fieldOfStudy: string;
}
