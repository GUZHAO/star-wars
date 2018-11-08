import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {MaterialModule} from '../third-party/material/material.module';

const cmps = [
  HomeComponent
];

@NgModule({
  declarations: [
    ...cmps
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ...cmps
  ]
})
export class HomeModule {
}
