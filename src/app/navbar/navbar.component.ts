import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MultiLangService } from '../multi-lang.service';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, TranslateModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {
  multiLangService = inject(MultiLangService);

  toggleLanguage(language: string): void {
    if (this.multiLangService.languageSignal() !== language) {
      this.multiLangService.updateLanguage(language);
    }
  }

  getLanguageIconClass(language: string): string {
    switch(language) {
      case 'en':
        return 'fi fi-us';
      case 'fr':
        return 'fi fi-fr';
      case 'ru':
        return 'fi fi-us';
      case 'es':
        return 'fi fi-es';
      default:
        return 'fi fi-us';
    }
  }

  getLanguageName(language: string): string {
    switch(language) {
      case 'en':
        return 'English';
      case 'fr':
        return 'French';
      case 'ru':
        return 'Russian';
      case 'es':
        return 'Spanish';
      default:
        return 'English';
    }
  }
}
