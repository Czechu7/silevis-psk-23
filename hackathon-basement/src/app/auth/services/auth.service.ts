import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../core/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedUser$ = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  private url = `http://hackathon23-mockapi-env.eba-qfrnjqkt.eu-central-1.elasticbeanstalk.com/user`;

  login(email: string) {
    this.http.get<User>(`${this.url}/${email}`).subscribe((res) => {
      if (res) {
        this.loggedUser$.next(true);
        this.router.navigateByUrl('/student');
      }
    });
  }
}
