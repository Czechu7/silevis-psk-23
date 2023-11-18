import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  messages: Message[];
  @Input() message!: string;

  ngOnInit() {
    this.messages = [
      { severity: 'error', summary: 'Error', detail: this.message },
    ];
  }
}
