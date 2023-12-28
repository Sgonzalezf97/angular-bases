import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[]=[
    {name:'Krilin',
    power:500},
    {
      name:'Goku',
      power:10000,
    },
    {
      name:'Vegeta',
      power:7500
    }
  ]

  onNewCharacter(character: Character):void{
    this.characters.push(character)
  }


}
