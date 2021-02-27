import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Mod1Module } from './mod1/mod1.module';
import { Mod2Module } from './mod2/mod2.module';
import { Comp404Component } from './comp404/comp404.component';
import { GuardLogGuard } from './guards/guard-log.guard';
import { GuardOutGuard } from './guards/guard-out.guard';
import { GuardLoadGuard } from './guards/guard-load.guard';
import { GuardActivChildGuard } from './guards/guard-activ-child.guard';

@NgModule({
  declarations: [
    AppComponent,
    Comp404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Mod1Module,
    Mod2Module
  ],
  providers: [GuardLogGuard, GuardOutGuard, GuardLoadGuard, GuardActivChildGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
