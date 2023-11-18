import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private apiUrl = 'http://localhost:5000/student/';

  constructor(private http: HttpClient) {}

  getStudents(): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'get-students');
  }

  changeAcceptation(albumNumber: String, isAccept: boolean): Observable<any> {
    return this.http.patch(this.apiUrl + 'update-accept', {
      albumNumber,
      isAccept,
    });
  }
}