import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeroRoutingModule} from './hero-routing.module';
import {HeroListingComponent} from './hero-listing/hero-listing.component';
import {HeroDetailsComponent} from './hero-detail/hero-detail.component';
import {MaterialModule} from '../third-party/material/material.module';
import {CoreModule} from '../core/core.module';

@NgModule({
  declarations: [HeroListingComponent, HeroDetailsComponent],
  imports: [
    CommonModule,
    HeroRoutingModule,
    MaterialModule,
    CoreModule
  ]
  // exports: [
  //   HeroListingComponent,
  //   HeroDetailsComponent
  // ]
})
export class HeroModule {
}
