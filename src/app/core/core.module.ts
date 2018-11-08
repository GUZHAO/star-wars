import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

const coreModuleDeps = [
  HttpClientModule
];

@NgModule({
  declarations: [],
  imports: [
    ...coreModuleDeps
  ],
  exports: [
    ...coreModuleDeps
  ]
})
export class CoreModule {
}
