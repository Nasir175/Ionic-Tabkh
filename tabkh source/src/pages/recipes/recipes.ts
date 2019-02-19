import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RecipePage } from '../recipe/recipe'

import { RecipesProvider } from '../../providers/recipes/recipes'

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html'
})
export class RecipesPage {

  title: String
  idCategory: number
  recipes: any = []

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public recipesProvider: RecipesProvider) {

  }

  ngOnInit() {
    this.title = this.navParams.get('title')
    this.idCategory = this.navParams.get('idCategory')

    this.recipesProvider.getRecipes(this.idCategory)
    .subscribe(
      data => {
          this.recipes = data.recipes
          console.log(this.recipes)
      },
      error => {
        console.log(error) 
      }
    )
  }


  showRecipe(i) {
    this.navCtrl.push(RecipePage, {"recipe":this.recipes[i]})
  }

}
