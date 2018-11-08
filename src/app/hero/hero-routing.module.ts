import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeroListingComponent} from './hero-listing/hero-listing.component';

const routes: Routes = [
  {
    path: '',
    component: HeroListingComponent
  },
  {
    path: 'hero',
    loadChildren: './hero/hero.module#HeroModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroRoutingModule { }
