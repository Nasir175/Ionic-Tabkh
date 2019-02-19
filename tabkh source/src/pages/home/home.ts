import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SearchPage } from '../search/search'
import { RecipesPage } from '../recipes/recipes'
import { RecipesProvider } from '../../providers/recipes/recipes'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [RecipesProvider]
})
export class HomePage {

  categorys: any = [] 

  constructor(public navCtrl: NavController, public recipesProvider: RecipesProvider) {

  }

  ngOnInit() {
    this.recipesProvider.getCategorys().subscribe(
      data => {
        this.categorys = data.categorys
      } ,

      error => {
        console.log(error)
      }

    )
  }

  showRecipes(idCate: number, title: String ) {
    this.navCtrl.push(RecipesPage, {"idCategory": idCate, "title": title})
  }

  openSearch() {
    this.navCtrl.push(SearchPage)
  }

}
