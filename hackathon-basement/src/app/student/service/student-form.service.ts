import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICompanyApiResponse } from 'src/app/shared/interfaces/ICompanyResponse.model';
import { IStudentForm } from 'src/app/shared/interfaces/IStudentForm.model';

@Injectable({
  providedIn: 'root',
})
export class StudentFormService {
  loggedUserData: IStudentForm;

  constructor(private http: HttpClient) {}

  handleSubmit(formValue: IStudentForm) {
    this.loggedUserData = formValue;
  }

  getCompanyInfo(nip: string) {
    return this.http.get<ICompanyApiResponse>(
      `https://wl-api.mf.gov.pl/api/search/nip/${nip}?date=2019-02-21`
    );
  }
}
