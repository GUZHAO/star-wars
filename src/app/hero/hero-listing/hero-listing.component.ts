import {Component, OnInit} from '@angular/core';
import {HeroService} from '../../core/hero.service';
import {Observable} from 'rxjs';
import {Hero} from '../../shared/models/hero';
import {Alliance} from '../../shared/models/alliance';

@Component({
  selector: 'app-hero-listing',
  templateUrl: './hero-listing.component.html',
  styleUrls: ['./hero-listing.component.scss']
})
export class HeroListingComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  chosenHero: Hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroes$ = this.heroService.findAll();
  }

  onSelectHero(hero: Hero): void {
    this.chosenHero = hero;
  }

  onChangeSide(evt: Alliance) {
    const hero = evt.npc;
    alert(`${hero.name} has joined the ${evt.side} side!`);
  }
}
