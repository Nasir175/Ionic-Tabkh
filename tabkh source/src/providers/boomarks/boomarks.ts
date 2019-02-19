import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage'

/*
  Generated class for the BoomarksProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BoomarksProvider {

  constructor(public storage: Storage) {
    console.log('Hello BoomarksProvider Provider');
  }


  bookMark() {
    return this.storage.get('bookmarks').then(bookmarks => {
      if(bookmarks == null) {
        bookmarks = new Array<any>()
      }
      return bookmarks
    })
  }

  isBookmared(recipe: any) {
    return this.bookMark().then(recipes => {
      for(let i = 0; i < recipes.length; i++) {
        if(recipes[i].id_recipe == recipe.id_recipe) {
          return true
        }
      }
      return false
    })
  }


  addBookmark(recipe: any) {
    this.bookMark().then(recipes => {
      recipes.push(recipe)
      this.save(recipes)
    })
  }

  removeBookmared(recipe: any) {
    this.bookMark().then(recipes => {
      recipes.splice(recipes.findIndex(elm => elm.id_recipe == recipe.id_recipe ), 1)
      this.save(recipes)
    })
  }

  save(recipes) {
    this.storage.set('bookmarks', recipes)
  }

}
