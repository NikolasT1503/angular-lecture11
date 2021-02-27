import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class PostInterceptor implements HttpInterceptor {
  //интерсепторы нужны для работы с запросами, установки ключей auth, изменения заголовков, изменения ответов, лоадер страницы и т.д.
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const requestClone = request.clone(); //здесь в скобках можно передать новые заголовки, body и т.д.

    return next.handle(requestClone).pipe(tap((event: HttpEvent<any>)=>{
      if ((event instanceof HttpResponse) && (event.status.toString()[0] === '2')){
        console.log('request.successful', request.url);
      }

    }));
  }
}
