import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuardOutGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('Проверка guardDeactivate currentRoute: ',currentRoute);
      console.log('Проверка guardDeactivate currentState', currentState);
      console.log('Проверка guardDeactivate nextState', nextState);
      return confirm('Вы действительно хотите уйти с этой страницы?');
  }
  
}
