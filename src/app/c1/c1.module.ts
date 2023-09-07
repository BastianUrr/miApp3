import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { C1Component } from './c1.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [C1Component],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    C1Component
  ]
})
export class C1Module { }
