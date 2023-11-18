import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { RouterEnum } from 'src/enums/router.enum';

@Injectable({
  providedIn: 'root',
})
export class StudentDocsService {
  docId = new BehaviorSubject<number | null>(null);

  constructor(private router: Router) {}

  openDocument(documentId: number) {
    this.docId.next(documentId);
    console.log(this.docId.getValue());
    this.router.navigate([`files/${documentId}`]);
  }
}
