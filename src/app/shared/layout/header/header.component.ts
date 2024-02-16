import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RouteStateService } from '../../../core/services/route-state.service';
import { SessionService } from '../../../core/services/session.service';
import { User } from '../../../core/models/user.model';
import { notification } from '../../../core/models/notification.model';
import { UserIdleService } from 'angular-user-idle';
import { ThemeService } from '../../../core/services/theme.service';
import { UserContextService } from '../../../core/services/user-context.service';
import { MenuDataService } from '../../../core/services/menu-data.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;

  displayNotifications: boolean;

  notifications: notification[];

  constructor(
    private router: Router,
    private routeStateService: RouteStateService,
    private sessionService: SessionService,
    private userIdle: UserIdleService,
    private themeService: ThemeService,
    private userContextService: UserContextService,
    private menuDataService: MenuDataService) {

    this.displayNotifications = false;

    var selectedTheme = this.sessionService.getItem("selected-theme");
    if (selectedTheme) {
      this.selectTheme(selectedTheme);
    }
  }

  ngOnInit() {
    this.user = this.sessionService.getItem("currentUser");
    this.notifications = [];
    for (var i = 1; i <= 5; i++) {
      var notificationObj = new notification("Message " + i, new Date(), null)
      this.notifications.push(notificationObj);
    }

    this.userIdle.startWatching();

    this.userIdle.onTimerStart().subscribe();

    this.userIdle.onTimeout().subscribe(() => {
      this.logout();
    });
  }

  logout() {
    this.userIdle.stopWatching();
    this.routeStateService.removeAll();
    this.userContextService.logout();
    this.sessionService.removeItem('active-menu');
    this.router.navigate(['/login']);
  }

  showNotificationSidebar() {
    this.displayNotifications = true;
  }

  toggleMenu() {
    this.menuDataService.toggleMenuBar.next(true);
  }

  selectTheme(theme: string) {
    this.sessionService.setItem("selected-theme", theme);
    this.themeService.selectTheme(theme);
  }

}
