import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { MessagesModule } from 'primeng/messages';
import { SpinnerComponent } from './spinner/component/spinner/spinner.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './spinner/interceptor/spinner';

@NgModule({
  declarations: [AlertComponent, SpinnerComponent],
  imports: [CommonModule, MessagesModule, ProgressSpinnerModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  exports: [AlertComponent, SpinnerComponent],
})
export class SharedModule {}
