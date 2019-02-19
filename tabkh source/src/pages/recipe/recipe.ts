import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BoomarksProvider } from '../../providers/boomarks/boomarks'

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
  providers: [BoomarksProvider]
})
export class RecipePage {

  recipe: any

  taprecipe: String = "ingredients"

  bookmarkicon: String = "md-heart-outline"
  isBookmarked: boolean = false

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public boomarksProvider: BoomarksProvider
  ) {

  }

  ngOnInit() {
    this.recipe = this.navParams.get("recipe")

    this.boomarksProvider.isBookmared(this.recipe).then(isBooked => {
      if(isBooked) {
        this.bookmarkicon = "md-heart"
        this.isBookmarked = true
      }
    })
  }


  bookmark() {
    if(this.isBookmarked) {
      this.boomarksProvider.removeBookmared(this.recipe)
      this.bookmarkicon = "md-heart-outline"
      this.isBookmarked = false
    } else {
      this.boomarksProvider.addBookmark(this.recipe)
      this.bookmarkicon = "md-heart"
      this.isBookmarked = true  
    }
  }

}
