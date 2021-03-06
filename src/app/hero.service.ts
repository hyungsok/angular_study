import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessagesService} from './messages.service';

@Injectable()
export class HeroService {

  constructor(private messageService: MessagesService) {
  }

  getHeroes(): Observable<Hero[]> {
    // Todo: send the messages _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
