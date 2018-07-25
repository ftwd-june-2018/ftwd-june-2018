import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  theFoodList:Array<any>;
  theSearchTerm:string;

  theNewFoodItem:any = {};

  formShowing:boolean = false;

  todaysFoods:Array<any> = [];



  addToMenu(thingToAdd){
    this.todaysFoods.unshift(thingToAdd);
  }


  toggleForm(){
    this.formShowing = !this.formShowing;
  }

  searchFoods(){
    this.theFoodList = foods.filter((oneFood)=>{
      return oneFood.name.toLowerCase().match(this.theSearchTerm.toLowerCase());
    });
  }

  addNewFood(){
    this.theFoodList.unshift(this.theNewFoodItem);
    this.theNewFoodItem = {};
    this.toggleForm();
  }


  constructor() { }

  ngOnInit() {
    this.theFoodList = foods;
  }

}
