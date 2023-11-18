// app.component.ts
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  islogged$ = false;
  ngOnInit() {
    // Tutaj możesz zasubskrybować się do BehaviorSubject
    this.authService.loggedUser$.subscribe((loggedIn: boolean) => {
      this.islogged$ = loggedIn;

    });
  }
  isLoginPage(): boolean {
    return this.router.url.includes('/login');
  }
  

  constructor(private authService: AuthService, translate: TranslateService, private router: Router) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('pl');

    // Defaultowo tłumaczy na polski
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/pl|en/) ? browserLang : 'pl');

    
 
  }
}
