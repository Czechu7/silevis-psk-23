import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentFormService } from '../../service/student-form.service';
import { StudentDocsService } from '../../service/student-docs.service';
import {
  BehaviorSubject,
  Observable,
  catchError,
  debounceTime,
  of,
  switchMap,
} from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IUser } from 'src/app/shared/interfaces/IUser.model';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;
  docId = new BehaviorSubject<number | null>(null);
  loggedUserData: IUser;

  constructor(
    private formBuilder: FormBuilder,
    private studentFormService: StudentFormService,
    private studentDocsService: StudentDocsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.loggedUserData$.subscribe((res) => {
      if (res) {
        this.loggedUserData = res;
        this.initializeForm(this.loggedUserData);
      } else {
        console.warn('no user found');
      }
    });
    this.checkNIPValue();
  }

  private initializeForm(userData: IUser) {
    this.studentDocsService.docId.subscribe((res) => {
      this.docId.next(res);
      switch (res) {
        case 0:
          this.studentForm = this.formBuilder.group({
            fullName: ['', Validators.required],
            fieldOfStudy: ['', Validators.required],
            indexNumber: [userData.studentNumber, Validators.required],
            type: ['', Validators.required],
            department: ['', Validators.required],
          });
          break;
        case 1:
          this.studentForm = this.formBuilder.group({
            indexNumber: ['', Validators.required],
            fullName: ['', Validators.required],
            department: ['', Validators.required],
            fieldOfStudy: ['', Validators.required],
            yearOfStudy: ['', Validators.required],
            companyName: ['', Validators.required],
            dateFrom: ['', Validators.required],
            dateTo: ['', Validators.required],
            type: ['', Validators.required],
          });
          break;
        default:
          this.studentForm = this.formBuilder.group({
            indexNumber: ['', Validators.required],
            yearOfStudy: ['', Validators.required],
            fieldOfStudy: ['', Validators.required],
            address: ['', Validators.required],
            NIP: ['', Validators.required],
            regon: ['', Validators.required],
            KRS: ['', Validators.required],
          });
      }
    });
  }

  checkNIPValue() {
    this.studentForm
      .get('NIP')
      ?.valueChanges.pipe(
        debounceTime(1500),
        switchMap((value) =>
          this.studentFormService.getCompanyInfo(value).pipe(
            catchError((error) => {
              console.error('There was an error!', error);
              return of(null);
            })
          )
        )
      )
      .subscribe((res) => {
        if (res) {
          this.studentForm.patchValue({
            regon: res.result.subject.regon,
            KRS: res.result.subject.krs,
            address: res.result.subject.workingAddress,
          });
        } else {
          console.error('No valid response received');
        }
      });
  }

  protected onSubmit() {
    console.log(this.studentForm);
    this.studentFormService.handleSubmit(this.studentForm.value);
  }
}
