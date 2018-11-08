import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatChipsModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

const matDependencies = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatCardModule,
  MatChipsModule
];

@NgModule({
  declarations: [],
  imports: [
    ...matDependencies
  ],
  exports: [
    ...matDependencies
  ]
})
export class MaterialModule {
}
