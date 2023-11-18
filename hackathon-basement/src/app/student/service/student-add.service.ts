import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/admin/models/User.model';

@Injectable({
  providedIn: 'root',
})
export class StudentAddService {
  private apiUrl = 'http://localhost:5000/student/';

  constructor(private http: HttpClient) {}

  addStudent(obj: User): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const newObj = { ...obj };

    return this.http.post<any>(this.apiUrl + 'save-student', newObj, {
      headers,
    });
  }
}
