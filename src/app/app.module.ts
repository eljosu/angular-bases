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

//Repositorio nuevo o actualizar el que habia con add ., cambiando nombre de commit, y push .
//En VSCode /bases sacarlo de /dist y ponerlo en carpeta principal. Cambiar nombre por docs
//En repositorio de github, Settings-Pages- deploy from branch.
//Poner en branch, main, y poner opcion /docs
//Cuando pulsamos link despues de deploy dara error, porque archivos estan en otra carpeta.
//Para arreglarlo:
//en /docs/index.html, cambiar <base href="/"> y poner un . antes de /
//<base href="./">
//Despues volver a actulizar repositorio de github

//Para hacerlo de forma automatica, ir a package.json y poner un script nuevo
//"build:href": "ng build --base-href ./"
//Asi se cambia automaticamente el href de docs/index.html
//escribimos npm run build:href, y crea un nuevo /dist

//despues necesitamos volver a actualizar el repositorio, eliminar /docs, y la nueva /dist/bases cambiarla de lugar, llamarla /docs...

//De forma automatizada, usar del-cli:
//npm install --global (opcional) del-cli --save-dev, y se instala como desarrollo
//en package.json poner un nuevo script:
//"delete:docs": "del docs"

//Copyfiles:
//npm i copyfiles --save-dev, y se ejecuta en terminal
//en package.json: "copy:dist": "copyfiles dist/bases/* ./docs -f"
//Copiara todo lo que hay en dist/bases en una carpeta nueva llamada docs. F de flat, para que no grabe dist/bases tal cual en /docs
//terminal npm run copy:dist

//Podemos combinar todos esos distintos comandos en uno:
//package.json:
//"build:github": "npm run delete:docs && npm run build:href && npm run copy:dist"
