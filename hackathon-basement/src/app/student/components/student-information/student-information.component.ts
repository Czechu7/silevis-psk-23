import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/interfaces/IUser.model';
import { AuthService } from 'src/app/auth/services/auth.service';


@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.scss']
})
export class StudentInformationComponent implements OnInit {

  loggedUserData: IUser;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.loggedUserData$.subscribe((res) => {
      if (res) {
        this.loggedUserData = res;
      } else {
        console.warn('no user found');
      }
    });
  }
}