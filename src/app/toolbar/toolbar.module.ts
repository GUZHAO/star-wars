import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../third-party/material/material.module';
import {ToolbarComponent} from './toolbar/toolbar.component';

const cmps = [
  ToolbarComponent,
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
export class ToolbarModule {
}
