import { Injectable } from '@angular/core';
import { Hero } from './hero';
import {HEROES, INDIANHEROES} from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('fetched Heroes');
    return of(HEROES);
  }
  getIndianHeroes(): Observable<Hero[]> {
    return of(INDIANHEROES);
  }
}
