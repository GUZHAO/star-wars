import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Hero} from '../shared/models/hero';
import {CoreModule} from './core.module';
import {catchError, concatMap, map} from 'rxjs/operators';


@Injectable({
  providedIn: CoreModule
})
export class HeroService {
  private url = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.url).pipe(
      catchError(() => [])
    );
  }

  findOne(id: number): Observable<Hero> {
    return this.http.get<Hero>(`this.url/${id}`);
  }

  addOne(hero: Hero): Observable<Hero> | Observable<null> {
    return this.http.post(this.url, hero).pipe(
      concatMap(() => this.findOne(hero.id)),
      catchError(() => of(null))
    );
  }

  deleteOne(id: number): Observable<boolean> {
    return this.http.delete(`${this.url}/${id}`).pipe(
      map(() => true),
      catchError(() => of(false))
    );
  }
}
