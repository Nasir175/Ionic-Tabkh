import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BoomarksProvider } from '../../providers/boomarks/boomarks'
import { RecipePage } from '../recipe/recipe'

/**
 * Generated class for the BookmarksPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-bookmarks',
  templateUrl: 'bookmarks.html',
  providers: [BoomarksProvider]
})
export class BookmarksPage {

  recipes: any = []

  constructor(public navCtrl: NavController, public navParams: NavParams,
      public boomarksProvider: BoomarksProvider  
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookmarksPage');

    this.boomarksProvider.bookMark().then(recipes => {
      this.recipes = recipes
    })
  }

  ionViewWillEnter() {
    this.boomarksProvider.bookMark().then(recipes => {
      this.recipes = recipes
    })    
  }


  showRecipe(i) {
    this.navCtrl.push(RecipePage, {"recipe":this.recipes[i]})
  }

}
