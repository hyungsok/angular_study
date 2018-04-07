import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  heroes: Hero[];

  // [서비스를 생성자 주입]
  // 클라이언트에 메모리 제약이 있을수 있음
  // private 로 선언하면 인스턴스 멤버가 되는 구문임 (자바와 완전 틀림)
  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.heroes = this.heroService.getHeroes();
  }

  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
