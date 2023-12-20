import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name:string = "Ironman";
  public age: number = 45;
  public imgRoute:string=" "

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name}-${this.age}`
  }

  changeHero():void{
    this.name="Spiderman";
  }
  changeAge():void{
    this.age=25;
  }
  resetForm(){
    this.age=45;
    this.name="ironman";
  }
  // changeImage(){
  //   this.imgRoute ="/assets/MorchisPreciosa.jpg"
  // }
  // changeName(){
  //   this.name="Nambreee que preciosidad";
  // }

}
