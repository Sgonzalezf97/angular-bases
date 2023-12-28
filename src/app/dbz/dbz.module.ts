import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from '../dbz/components/list/list.component';
import { CharacterComponent } from '../dbz/components/character/character.component';



@NgModule({
  declarations: [MainPageComponent,ListComponent,CharacterComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
