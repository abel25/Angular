import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home/home.component';
import { NgModule } from '@angular/core';
import { HeroesComponent } from './components/heroes/heroes/heroes.component';
import { AboutComponent } from './components/about/about/about.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent },
    {path: 'heroes', component: HeroesComponent },
    {path: 'about', component: AboutComponent },
    {path: 'heroes/heroe/:id', component: HeroeComponent },
    {path: 'searchpage/:inputValue', component: SearchpageComponent },
    {path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ROUTES {}