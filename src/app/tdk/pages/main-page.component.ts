import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { TdkService } from '../services/tdk.service';

@Component({
  selector: 'tdk-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor ( private tdkService: TdkService) {}

  get characters(): Character[] {

    return [...this.tdkService.characters];

  }

  onDeleteCharacter(id: string): void {

    this.tdkService.deleteCharacterbyId(id);
  }

  newCharacter(character: Character): void {

    this.tdkService.addCharacter(character);
  }

  //Lo comento porque lo traslado a un servicio
  // public characters: Character[] = [{
  //   name: 'Batman',
  //   power: 10000
  // },{
  //   name: 'Joker',
  //   power: 9000
  // },{
  //   name: 'Two faces',
  //   power: 7500
  // }, {
  //   name: 'Catwoman',
  //   power: 8500
  // }, {
  //   name: 'Bane',
  //   power: 12000
  // }];

  // newCharacter(character: Character): void {
  //   this.characters.push(character);

  // }

  // deleteCharacter(index: number): void {
  //   //TODO: Emitir el ID del personaje a eliminar

  //   console.log(index);

  //   this.characters.splice(index, 1);


  // }

}
