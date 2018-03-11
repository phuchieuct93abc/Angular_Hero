import { HeroService } from './../../services/hero.service';
import { Heros } from './../../models/mock-heros';
import { Component, OnInit } from '@angular/core';
import Hero from '../../models/hero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heros: Hero[];
  constructor(private heroService: HeroService, private router: Router) {

  }
  onSelectHero(hero: Hero): void {
    this.router.navigateByUrl(`/detail/${hero.id}`); 


  }

  ngOnInit() {
    this.heroService.getHeros().subscribe(heroes => {
      this.heros = heroes;

    });
  }

}
