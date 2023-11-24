import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'tdk-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent {

  @Input()
  public characterList: Character[]= [{
    name: 'Alfred',
    power: 10
  }]

  @Output()
  public onDeleteCharacterbyId: EventEmitter<string> = new EventEmitter();

  //   console.log(index);

  //   this.characterList.splice(index, 1);
  // }
  //Lo comento porque lo vamos a transferir a mainpage.component.ts

  emitIndex(id?: string): void {

    //Una opcion es:
    if (!id) return;

    this.onDeleteCharacterbyId.emit(id)
  }

}
