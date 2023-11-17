import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('pl');

    // Defaultowo tłumaczy na polski

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/pl|en/) ? browserLang : 'pl');
  }
}
