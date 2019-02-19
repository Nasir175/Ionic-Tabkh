import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RecipesPage} from '../pages/recipes/recipes'
import { RecipePage} from '../pages/recipe/recipe'
import { SearchPage } from '../pages/search/search'
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RecipesProvider } from '../providers/recipes/recipes';
import { BoomarksProvider } from '../providers/boomarks/boomarks';
import { BookmarksPage } from '../pages/bookmarks/bookmarks'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RecipesPage,
    RecipePage,
    SearchPage,
    BookmarksPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage, 
    RecipesPage,
    RecipePage,
    SearchPage,
    BookmarksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RecipesProvider,
    BoomarksProvider
  ]
})
export class AppModule {}
