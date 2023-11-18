import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
items: MenuItem[]|undefined;
selectedImage: string;
  constructor(public translate: TranslateService) {
    this.selectedImage = this.getImagePath(translate.currentLang);

  }

  changeLanguage(selectedLang: string): void {
    this.translate.use(selectedLang);
    this.selectedImage = this.getImagePath(selectedLang);
  }

  getImagePath(lang: string): string {
    return `assets/${lang.toLowerCase()}.png`;
  }
}
