// app.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from './auth/services/auth.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  islogged$ = false;

  constructor(
    private authService: AuthService,
    translate: TranslateService,
    private router: Router,
    private http: HttpClient
  ) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('pl');

    // Defaultowo tłumaczy na polski
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/pl|en/) ? browserLang : 'pl');
  }

  ngOnInit() {
    this.http
      .get(`https://wl-api.mf.gov.pl/api/search/nip/9511855233?date=2019-02-21`)
      .subscribe((res) => console.log(res));

    this.authService.loggedUser$.subscribe((loggedIn: boolean) => {
      this.islogged$ = loggedIn;
    });
  }
  isLoginPage(): boolean {
    return this.router.url.includes('/login');
  }
}
