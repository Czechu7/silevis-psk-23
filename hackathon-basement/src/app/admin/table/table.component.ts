import { Component } from '@angular/core';
import { User } from '../models/User.model';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  updateIsAccepted($event: Event, albumNumber: String) {
    console.log(`Album Number: ${albumNumber}`);

    const isChecked = ($event.target as HTMLInputElement).checked;
    this.studentService
      .changeAcceptation(albumNumber, isChecked)
      .subscribe((data) => {
        console.log(data);
      });
  }
  students: User[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((data) => {
      this.students = data.students;
      console.log(data);
    });
  }
}
