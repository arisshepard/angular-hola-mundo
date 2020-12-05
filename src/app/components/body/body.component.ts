import {Component} from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{
    mostrar = true;

    frase: any = {
        mensaje : 'Toss a coin to your witcher',
        autor: 'Jaskier'
    };

    personajes: string[] = ['spiderman', 'venom', 'dr. octopus'];


}
