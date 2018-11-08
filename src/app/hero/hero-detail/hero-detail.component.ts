import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Alliance} from '../../shared/models/alliance';
import {Hero} from '../../shared/models/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailsComponent implements OnInit, OnChanges {
  @Input() hero: Hero;
  @Output() sideChange: EventEmitter<Alliance> = new EventEmitter<Alliance>();
  constructor() { }

  ngOnInit() {}

  ngOnChanges() {}

  onJoin(side: string): void {
    const alliance: Alliance = {npc: this.hero, side: side};
    this.sideChange.emit(alliance);
  }
}
