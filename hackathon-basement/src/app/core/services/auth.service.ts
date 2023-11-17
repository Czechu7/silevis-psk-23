import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  url = `http://hackathon23-mockapi-env.eba-qfrnjqkt.eu-central-1.elasticbeanstalk.com/user`;

  login(email: string): Observable<User> {
    return this.http
      .get<User>(`${this.url}/${email}`, {
        headers: {
          ['accept']: 'application/json',
          ['Access-Control-Allow-Origin']: 'http://localhost:4200',
          ['Access-Control-Allow-Methods']: 'GET, POST, PUT, DELETE, OPTIONS',
          ['Access-Control-Allow-Headers']: 'Content-Type',
        },
      })
      .pipe(map((user) => user));
  }
}
