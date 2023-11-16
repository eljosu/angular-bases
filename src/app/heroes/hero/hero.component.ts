import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {

  public name: string = 'Ironman';
  public age : number = 45;

  //getters y setters
  //Parece una propiedad pero es un metodo

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }


  changeHero(): void {
    this.name = 'Batman';
      }

  changeAge(): void {
     this.age = 40;
    }

  resetForm(): void {
    this.name = 'Ironman';
    this.age = 45;
  }
}

