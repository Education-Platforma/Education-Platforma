import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class teacherGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: any, state: any): boolean {
    if (this.authService.isAuthenticated()) {
      const decodedToken = this.authService.decodeToken();
      decodedToken.role = 'Teacher';
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
