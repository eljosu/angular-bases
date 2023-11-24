import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './counter/components/counter.module';
import { HeroesModule } from './heroes/heroes.module';
import { TdkModule } from './tdk/tdk.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeroesModule,
    TdkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

//Los Modulos siempre van a la parte de Imports
//Para subir repositorio en github:
//git init para inicializarlo
//git.add . para preparar todos los cambios que he hecho para la fotografia que haremos
//git commit -m "Fin de seccion 4"
//git checkout -- . para volver a la ultma fotografia que se hizo, por si hubo algun error
//git remote add origin https://github.com/eljosu/angular-bases.git crea referencia de github para subirlo ahi
//git branch -M main la renombra como main esa rama
//git push -u origin main establecemos el origin por defecto en la rama main

//Para hacer cambios:
//git add .
//git commit -m "nombre actualizado"
//git push

//Para desplegar en http-server, servidor local, probando como produccion:
//npm install --global http-server
//Despues
//http-server -o

//Para desinstalar http-server:
//npm uninstall

//Para desplegar metodo de produccion:
//ng build o npm run build
//una de ellas es con Angular Cli directamente, la otra es con el Cli, pero usando directamente la propiedad que aparece en package.json
