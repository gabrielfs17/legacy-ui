import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../core/services/user-data.service';
import { User } from '../../core/models/user.model';
import { ToastService } from '../../core/services/toast.service';
import { RouteStateService } from '../../core/services/route-state.service';
import { SessionService } from '../../core/services/session.service';
import { TranslateService } from '@ngx-translate/core';
import { UserContextService } from '../../core/services/user-context.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;

  password: string;

  locale: string;

  version: string;

  msgs: any[];

  constructor(
    private userService: UserDataService,
    private toastService: ToastService,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    public translate: TranslateService,
    private userContextService: UserContextService
  ) { }

  ngOnInit() {
    this.userName = "";
    this.password = "";
    this.locale = this.sessionService.getItem("ng-prime-language");
    this.version = environment.version;
    this.msgs = [{ severity: 'info', detail: 'UserName: admin' }, { severity: 'info', detail: 'Password: password' }];
  }

  onClickLogin() {
    let user: User = this.userService.getUserByUserNameAndPassword(this.userName, this.password);
    if (user) {
      this.userContextService.setUser(user);
      this.routeStateService.add("Dashboard", '/main/dashboard', null, true);
      return;
    }
    this.toastService.addSingle('error', '', 'Invalid user.');
    return;
  }

  onLanguageChange($event) {
    this.locale = $event.target.value;
    if (this.locale == undefined || this.locale == null || this.locale.length == 0) {
      this.locale = "en";
    }
    
    this.translate.use(this.locale);
    this.sessionService.setItem("ng-prime-language", this.locale);
  }

}
