import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfCreatorComponent } from './pdf-creator.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
describe('PdfCreatorComponent', () => {
  let component: PdfCreatorComponent;
  let fixture: ComponentFixture<PdfCreatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfCreatorComponent,InputTextModule,CheckboxModule,RadioButtonModule]
    });
    fixture = TestBed.createComponent(PdfCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
