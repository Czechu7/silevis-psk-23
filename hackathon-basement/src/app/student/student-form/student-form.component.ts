import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
})
export class StudentFormComponent implements OnInit {
  studentForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

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
    console.log(this.studentForm.value);
  }
}
