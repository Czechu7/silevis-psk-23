import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-date',
  templateUrl: './change-date.component.html',
  styleUrls: ['./change-date.component.scss'],
})
export class ChangeDateComponent implements OnInit {
  ngOnInit() {
    this.form.controls.changeDate.valueChanges.subscribe((value) => {
      console.log('Wartość checkboxa zmieniona:', value);
    });
  }
  form = new FormGroup({
    changeDate: new FormControl(false, {
      // validators: [],
      nonNullable: true,
    }),
    startDate: new FormControl(),
    endDate: new FormControl(),
  });

  get controls() {
    return this.form.controls;
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
