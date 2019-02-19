import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipePage } from '../recipe/recipe'
import { RecipesProvider } from '../../providers/recipes/recipes'

@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
  providers: [RecipesProvider]
})
export class SearchPage {

  recipeSearch: string
  recipes: any = []

  constructor(public navCtrl: NavController, public recipesProvider: RecipesProvider) {

  }

  searchRecipes(serach) {
    this.recipeSearch = serach.target.value
    if(this.recipeSearch.length > 2 ) {
      this.recipes.length = 0
      this.loadRecipes(this.recipeSearch)
    }
  }

  loadRecipes(search) {
    this.recipesProvider.getRecipesSerach(search)
    .subscribe(
      data => {
        this.recipes = data.recipes
      }
    )

  }

  showRecipe(i) {
    this.navCtrl.push(RecipePage, {"recipe":this.recipes[i]})
  }  

}
