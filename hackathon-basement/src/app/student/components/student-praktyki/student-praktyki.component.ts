import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/services/auth.service';
import { IInternship } from 'src/app/shared/interfaces/IInternship.model';
import { IUser } from 'src/app/shared/interfaces/IUser.model';
import { StudentAddService } from '../../service/student-add.service';
import { User } from 'src/app/admin/models/User.model';

@Component({
  selector: 'app-student-praktyki',
  templateUrl: './student-praktyki.component.html',
  styleUrls: ['./student-praktyki.component.scss'],
})
export class StudentPraktykiComponent implements OnInit {
  myForm: FormGroup;
  miesiacPraktyk: IInternship[];
  loggedUserData: IUser;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private studentAdd: StudentAddService
  ) {}
  ngOnInit(): void {
    this.authService.loggedUserData$.subscribe((res) => {
      if (res) {
        this.loggedUserData = res;
      } else {
        console.warn('no user found');
      }
    });
    this.miesiacPraktyk = [
      { name: '' },
      { name: 'Lipcowe' },
      { name: 'Wrzesniowe' },
    ];
    this.myForm = this.fb.group({
      nrAlbumu: [this.loggedUserData.studentNumber],
      imie: [this.loggedUserData.firstName],
      nazwisko: [this.loggedUserData.lastName],
      email: [this.loggedUserData.email],
      praktyki: ['', Validators.required, Validators.nullValidator],
      termin: ['', Validators.required],
      firma: ['', Validators.required],
      adres: ['', Validators.required],
      telKontaktowy: ['', Validators.required],
      zaliczenie: ['', Validators.required],
    });
  }
  onSubmit() {
    console.log(this.myForm.value);

    const user: User = {
      albumNumber: this.myForm.value.nrAlbumu,
      firstName: this.myForm.value.imie,
      lastName: this.myForm.value.nazwisko,
      email: this.myForm.value.email,
      internship: this.myForm.value.internship,
      firstDate: this.myForm.value.termin,
      company: this.myForm.value.firma,
      adress: this.myForm.value.adres,
      phoneNumber: this.myForm.value.telKontaktowy,
      isAccept: this.myForm.value.zaliczenie ? true : false,
      changeDateRequest: false,
    };

    this.studentAdd.addStudent(user).subscribe((data) => {
      console.log(data);
    });
  }
}
