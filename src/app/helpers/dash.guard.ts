import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthenticationService } from '../services/auth.service';
import { SubjectService } from './service.subject';

@Injectable({
  providedIn: 'root',
})
export class DashGuard implements CanActivate {
  constructor(private auth: AuthenticationService, private router: Router, private subjetcService: SubjectService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.checkLogin();
    if (!this.auth.isLoggedIn()) {
      this.router.navigate(['login']);
    }
    this.subjetcService.pageCardHeaderSubject.next(route.data.routerTitle);
    return true;
  }

  checkLogin(): void {
    if (!this.auth.isLoggedIn()) {
      this.auth.logout();
    }
  }
}
