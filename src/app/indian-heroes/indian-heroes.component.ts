import { Component, OnInit } from '@angular/core';
import {HeroService} from '../hero.service';
import {Hero} from '../hero';

@Component({
  selector: 'app-indian-heroes',
  templateUrl: './indian-heroes.component.html',
  styleUrls: ['./indian-heroes.component.css']
})
export class IndianHeroesComponent implements OnInit {
  indianHeroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getIndianHeros();
  }
  getIndianHeros(): void {
    this.heroService.getIndianHeroes()
      .subscribe(indianHeroes => this.indianHeroes = indianHeroes);
  }
}
