
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
    selector: 'dbz-list',
    templateUrl: './list.component.html',
    styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id:"6556446",
    name:'Trunks',
    power:5000
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // deleteCharacter(index: number):void{
  //   this.onDelete.emit(index)
  // }

  onDeleteCharacter(index: number):void{
    console.log(index)
  }

  deleteCharactersById(id:string):void{
    console.log(id)
    this.onDelete.emit(id)
  }

}


