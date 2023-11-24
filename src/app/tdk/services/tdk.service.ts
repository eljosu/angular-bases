import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import  {v4 as uuid } from 'uuid'

//@Injectable convierte esa clase en un servicio
@Injectable({
  providedIn: 'root'
})

export class TdkService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Batman',
    power: 10000
  },{
    id: uuid(),
    name: 'Joker',
    power: 9000
  },{
    id: uuid(),
    name: 'Two faces',
    power: 7500
  }, {
    id: uuid(),
    name: 'Catwoman',
    power: 8500
  }, {
    id: uuid(),
    name: 'Bane',
    power: 12000
  }];

  // newCharacter(character: Character): void {

  //   const addedCharacter: Character = {

  //     id: uuid(),
  //     name: character.name,
  //     power: character.power

  //   }

  //Tambien se puede desestructurar:
  // newCharacter({name, power}: Character): void {

  //   const addedCharacter: Character = {

  //     id: uuid(),
  //     name,
  //     power

  //   }

//Pero al desestructurar, si son demasiadas propiedades, va a ser mas complicado.
//Es mejor hacerlo asi, porque asi aunque anadamos muchas propiedades a character, no hace falta cambiar nada
  addCharacter(character: Character): void {

    //Spread, utiliza todos las distintaas propiedades de character
    const addedCharacter: Character = { id: uuid(), ...character }

    this.characters.push(addedCharacter);

  }

  // deleteCharacter(index: number): void {
  //   //TODO: Emitir el ID del personaje a eliminar

  //   console.log(index);

  //   this.characters.splice(index, 1);


  // }

  deleteCharacterbyId(id: string){

    console.log(id);

    this.characters = this.characters.filter(character => character.id !== id)


  }

}

