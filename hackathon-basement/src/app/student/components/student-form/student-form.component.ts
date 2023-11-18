import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentFormService } from '../../service/student-form.service';
import { StudentDocsService } from '../../service/student-docs.service';
import { BehaviorSubject } from 'rxjs';
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
  }

  private initializeForm(userData: IUser) {
    this.studentDocsService.docId.subscribe((res) => {
      this.docId.next(res);
      switch (res) {
        case 0:
          this.studentForm = this.formBuilder.group({
            indexNumber: [userData.studentNumber, Validators.required],
            yearOfStudy: ['', Validators.required],
            fieldOfStudy: ['', Validators.required],
            address: ['', Validators.required],
            NIP: ['', Validators.required],
            regon: ['', Validators.required],
            KRS: ['', Validators.required],
          });
          break;
        case 1:
          this.studentForm = this.formBuilder.group({
            indexNumber: ['', Validators.required],
            yearOfStudy: ['', Validators.required],
            fieldOfStudy: ['', Validators.required],
            address: ['', Validators.required],
            NIP: ['', Validators.required],
            regon: ['', Validators.required],
            KRS: ['', Validators.required],
            test: ['', Validators.required],
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

  protected onSubmit() {
    this.studentFormService.handleSubmit(this.studentForm.value);
  }
}
