import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

// gọi service

@Injectable({
  providedIn: 'root'
})
export class ContactGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // giúp bảo vệ routing

    // sử dụng localstorage => có token

    // gọi đến api xác nhận token

    // token còn thời hạn sử dụng
    var exp = 0;

    if(exp == 1)
    {
      return true;
    }
    else
    {
      // chuyển hướng khi chưa login
      this.router.navigateByUrl('/dang-nhap');
      return false;
    }
  }
  
}
