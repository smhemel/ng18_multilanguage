import { effect, inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MultiLangService {
  translateService = inject(TranslateService);
  localStorageValue: any = window.localStorage.getItem('languageSignal') == 'undefined' ? '"en"' : window.localStorage.getItem('languageSignal');

  languageSignal = signal<string>(
    JSON.parse(this.localStorageValue)
  );
  
  constructor() {
    effect(() => {
      window.localStorage.setItem('languageSignal', JSON.stringify(this.languageSignal));
      this.translateService.use(this.languageSignal());
    });
  }

  updateLanguage(language: string): void {
    this.languageSignal.update(() => {
      if (language) return language;
      else return 'en';
    });
  }
}
