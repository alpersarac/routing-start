import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class  AuthGuard implements CanActivate{
  constructor(private authService:AuthService, private router:Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated()
    .then(
      (authententicated)=>{
        if(authententicated){
          return true;
        }else {
          this.router.navigate(['/']);
        }
      }
    )
  }
}
