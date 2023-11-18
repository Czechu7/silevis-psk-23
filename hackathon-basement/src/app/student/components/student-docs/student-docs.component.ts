import { Component, OnInit } from '@angular/core';
import { IDocuments } from 'src/app/shared/interfaces/IDocuments.model';
import { studentDocuments } from '../../documents';
import { StudentDocsService } from '../../service/student-docs.service';

@Component({
  selector: 'app-student-docs',
  templateUrl: './student-docs.component.html',
  styleUrls: ['./student-docs.component.scss'],
})
export class StudentDocsComponent implements OnInit {
  protected documents: IDocuments[];

  constructor(private studentDocsService: StudentDocsService) {}

  ngOnInit(): void {
    this.documents = studentDocuments;
  }

  openDocument(documentId: number): void {
    this.studentDocsService.openDocument(documentId);
  }
}
