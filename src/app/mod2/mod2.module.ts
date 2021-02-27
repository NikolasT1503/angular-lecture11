import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PostInterceptor } from '../interceptors/post.interceptor';
import { Mod2Component } from './mod2.component';
import { Mod2Service } from './mod2.service';

@NgModule({
  declarations: [Mod2Component],
  imports: [CommonModule, HttpClientModule],
  exports: [Mod2Component],
  providers: [Mod2Service, 
  {provide: HTTP_INTERCEPTORS, useClass: PostInterceptor, multi: true}],
})
export class Mod2Module {}
