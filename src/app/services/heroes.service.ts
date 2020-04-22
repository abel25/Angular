import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class HeroesService {

    private heroes: Heroe[] = [
        {
          nombre: "Aquaman",
          bio: "Aquaman's most recognized power is the telepathic ability to communicate with marine life, which can summon at great distances.",
          img: "assets/img/aquaman.png",
          aparicion: "1941-11-01",
          casa:"DC"
        },
        {
          nombre: "Batman",
          bio: "The main features of Batman are summarized in 'physical dexterity, deductive abilities and obsession'. Most of the basic characteristics of the comics have varied due to the different interpretations they have given to the character.",
          img: "assets/img/batman.png",
          aparicion: "1939-05-01",
          casa:"DC"
        },
        {
          nombre: "Daredevil",
          bio: "Having lost his sight, Daredevil's remaining four senses were augmented by radiation to superhuman levels, in the accident he had as a child. Despite his blindness, he can 'see' through a 'sixth sense' that serves as a bat-like radar.",
          img: "assets/img/daredevil.png",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Hulk",
          bio: "His main power is his ability to increase his strength to practically unlimited levels while increasing his fury. Depending on which Hulk personality is in command at the time (the Hulk Banner is the weakest, but he makes up for it with his intelligence).",
          img: "assets/img/hulk.png",
          aparicion: "1962-05-01",
          casa:"Marvel"
        },
        {
          nombre: "Linterna Verde",
          bio: "Possessor of the ring of power that possesses the ability to create manifestations of solid light through the use of thought. It is powered by the Green Flame (reviewed by later writers as a mystical power called Starheart), a magical flame contained within an orb (the orb was actually a green metal meteorite that fell to Earth, which a manufacturer found of lamps called Chang) ",
          img: "assets/img/linterna-verde.png",
          aparicion: "1940-06-01",
          casa: "DC"
        },
        {
          nombre: "Spider-Man",
          bio: "After being bitten by a radioactive spider, he obtained the following superhuman powers, great strength, agility, being able to climb walls. Spider-Man's strength allows him to lift 10 tons or more. Thanks to this great strength, Spider-Man can perform incredible jumps. A arachnid sense, which lets you know if a danger looms over you, before it happens. Sometimes this can lead Spider-Man to the source of the danger.",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Wolverine",
          bio: "In the fictional universe of Marvel, Wolverine has regenerative powers that can heal any wound, no matter how mortal it is, also that same power makes him immune to any disease on Earth and some aliens. He also possesses superhuman strength, which while not comparable to that of other superheroes like the Hulk, does surpass that of any human.",
          img: "assets/img/wolverine.png",
          aparicion: "1974-11-01",
          casa: "Marvel"
        }
      ];

    constructor() {
        console.log("Heroe Service Ok")
    }

    public getHeroes(): Heroe[]{
        return this.heroes;
    }

    public getHeroe(id: any){
      if (id >= 0){
        return this.heroes[id];
      }else{
        for (const hero of this.heroes) {
          id = id.toLowerCase();
          const nameLower = hero.nombre.toLowerCase();
          if (nameLower.indexOf(id) >= 0){
            return hero;
          }
        }
      }
    }

    public searchHeroes(inputHeroe: string): Heroe[]{
      const heroesArr: Heroe[] = [];
      if (inputHeroe !== ''){
        inputHeroe = inputHeroe.toLowerCase();
        for (const hero of this.heroes) {
          const name = hero.nombre.toLowerCase();
          if (name.indexOf(inputHeroe) >= 0){
            heroesArr.push(hero);
          }
        }
      }
      return heroesArr;
    }

}

export interface Heroe{
  nombre: string,
  bio: string,
  img: string,
  aparicion: string,
  casa: string
}