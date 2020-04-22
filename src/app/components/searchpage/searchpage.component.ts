import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  heroes: any[] = [];
  busqueda: string;
  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute) {
      this.activatedRoute.params.subscribe(params => {
        this.heroes = this.heroesService.searchHeroes(params['inputValue']);
        this.busqueda = params['inputValue'];
      });
    }

  ngOnInit(): void {
  }

}
