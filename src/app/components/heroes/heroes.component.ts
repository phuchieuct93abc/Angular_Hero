import { Heros } from './../../models/mock-heros';
import { Component, OnInit } from '@angular/core';
import Hero from '../../models/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heros = Heros;
  constructor() {

  }
  onSelectHero(hero: Hero) {
    console.log("selected hero",hero)
    this.selectedHero = hero;

  }

  ngOnInit() {
  }

}
