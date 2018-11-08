import {Component, OnInit} from '@angular/core';
import {Observable, of} from 'rxjs';
import { catchError, count, flatMap } from 'rxjs/operators';
import {HeroService} from '../core/hero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  heroCount$: Observable<number>;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroCount$ = this.heroService.findAll().pipe(
      flatMap(data => data),
      count(),
      catchError((e) => of(0))
    );
  }

}
