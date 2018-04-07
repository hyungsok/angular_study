import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  hero = new Hero();
  constructor() {
    // this 생략을 못함 HeroesComponent를 프레임단에서 생성해주지 못하기 때문
    this.hero.id = 2;
    this.hero.name = 'Windstorm';
  }

  ngOnInit() {
  }

}
