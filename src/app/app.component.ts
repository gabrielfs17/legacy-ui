import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { LoaderService } from './core/services/loader.service';
import { ThemeService } from './core/services/theme.service';
import { SessionService } from './core/services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ng-Prime';
  showLoader: boolean;
  theme: string;

  constructor(private loaderService: LoaderService,
    private themeService: ThemeService,
    private sessionService: SessionService,
    translate: TranslateService) {

    var theme = this.sessionService.getItem("selected-theme");
    if (theme != null && theme.length > 0) {
      this.theme = theme;
      this.themeService.selectTheme(theme);
    } else {
      this.theme = "theme-teal";
    }

    translate.setDefaultLang('pt');
    var language = this.sessionService.getItem("ng-prime-language");
    if (language != null && language.length > 0) {
      translate.use(language);
    } else {
      this.sessionService.setItem("ng-prime-language", "en");
    }
  }

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => {
      this.showLoader = val;
    });

    this.themeService.theme.subscribe((val: string) => {
      this.theme = val;
    });
  }

  ngOnDestroy() {
    this.themeService.theme.observers.forEach(function (element) { element.complete(); });
    this.loaderService.status.observers.forEach(function (element) { element.complete(); });
  }
}
