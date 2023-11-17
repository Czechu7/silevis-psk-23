import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentFormService } from '../../service/student-form.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private studentFormService: StudentFormService
  ) {}

  ngOnInit(): void {
    this.http
      .get(
        'http://hackathon23-mockapi-env.eba-qfrnjqkt.eu-central-1.elasticbeanstalk.com/all-emails/'
      )
      .subscribe((res) => console.log(res));

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

  onSubmit() {
    this.studentFormService.handleSubmit(this.studentForm.value);
  }
}
