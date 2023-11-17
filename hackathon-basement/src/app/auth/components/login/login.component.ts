import { User } from './../../../core/models/user.model';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loggedUser: User;

  constructor(private authService: AuthService, private router: Router) {}

  form = new FormGroup({
    email: new FormControl('', {
      validators: [
        Validators.email,
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
      ],
      nonNullable: true,
    }),
  });

  get controls() {
    return this.form.controls;
  }

  protected getErrorMessage(control: FormControl) {
    if (control.hasError('required')) {
      return 'Musisz wpisać jakąś wartość.';
    }

    if (control.hasError('minlength')) {
      return 'Przekazałeś za mało znaków w kontrolce.';
    }

    if (control.hasError('maxlength')) {
      return 'Przekazałeś za dużo znaków w kontrolce.';
    }

    return control.hasError('email') ? 'Nieprawidłowy adres e-mail' : '';
  }

  protected handleLogin() {
    this.authService.login(this.form.getRawValue().email);
  }
}
