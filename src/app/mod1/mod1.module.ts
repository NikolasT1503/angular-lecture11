import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mod1Component } from './mod1.component';
import { Comp1Component } from './comp1.component';



@NgModule({
  declarations: [Mod1Component, Comp1Component],
  imports: [
    CommonModule
  ],
  exports: [Mod1Component, Comp1Component]
})
export class Mod1Module { }
