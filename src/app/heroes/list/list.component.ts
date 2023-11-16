import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Batman', 'Superman', 'Wonder Woman', 'Flash', 'Spiderman'];
  public deletedHero?: string;

  borrarUltimo():void {
    this.deletedHero = this.heroNames.pop();
  }

}
