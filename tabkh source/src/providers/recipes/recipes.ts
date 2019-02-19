import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RecipesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RecipesProvider {

  private url: string

  constructor(public http: Http) {
    console.log('Hello RecipesProvider Provider');
    this.url = "http://localhost/tabkh/api.php"
  }


  getRecipes(idCat: number) {
    return this.http.get(this.url+"?action=getrecipes&cat="+idCat).map(res => res.json())
  }

  getCategorys() {
    return this.http.get(this.url+"?action=getcategory").map(res => res.json() )
  }

  getRecipesSerach(search: string) {
    return this.http.get(this.url+"?action=getrecipes&search="+search).map(res => res.json())
  }

}
