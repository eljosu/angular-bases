import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  // template: '<h1>Hola Counter</h1>',
  //Vamos a mover el codigo de app.component.html aqui directamente
  template: `
  <h3>Counter: {{ counter}} </h3>

      <button (click)="increaseBy(+1)">+1</button>
      <button style="margin-left: 7px;" (click)="resetCounter()">Reset</button>
      <button style="margin-left: 7px;" (click)="increaseBy(-1)">-1</button>

<hr style="margin-top: 20px;">
  `
})

export class CounterComponent {

  public counter: number = 10;

  increaseBy(value:number) :void {
    this.counter += value;
    }

  resetCounter() {
    this.counter = 10;
  }

}



// Con Angular snippets podriamos borrar todo y escribir a-component,y ya escribiria los imports, @Component, export class
//a- te da distintas opciones de snippet
