import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { locale as english } from '@lang/en';
import { locale as spanish } from '@lang/es';
import { TranslationLoaderService } from '@theme/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Sicrux Enterprise';

  /**
   * Constructor
   *
   * @param {DOCUMENT} document
   * @param {TranslateService} _translateService
   * @param {TranslationLoaderService} _translationLoaderService
   * @param {Platform} _platform
   */

  constructor(
    @Inject(DOCUMENT) private document: any,
    private _translationLoaderService: TranslationLoaderService,
    private _translateService: TranslateService,
    private _platform: Platform
  ) {
    // Add languages
    this._translateService.addLangs(['en', 'es']);

    // Set the default language
    this._translateService.setDefaultLang('es');

    // Use a language
    this._translateService.use('es');

    // Set the navigation translations
    this._translationLoaderService.loadTranslations(english, spanish);

    // Add is-mobile class to the body if the platform is mobile
    if (this._platform.ANDROID || this._platform.IOS) {
      this.document.body.classList.add('is-mobile');
    }
  }
}
