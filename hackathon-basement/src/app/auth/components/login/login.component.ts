import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

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

  getErrorMessage(control: FormControl) {
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

  handleLogin() {
    this.authService.login(this.form.getRawValue().email).subscribe({
      next: (value) => {
        console.log(value);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
