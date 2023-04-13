import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PopularReviewsComponent } from './popular-reviews/popular-reviews.component';
import { FirstRowComponent } from './first-row/first-row.component';
import { NotFirstRowComponent } from './not-first-row/not-first-row.component';
import { TopRatedAlbumSectionComponent } from './top-rated-album-section/top-rated-album-section.component';
import { TopRatedListsComponent } from './top-rated-lists/top-rated-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationBarComponent,
    PopularReviewsComponent,
    FirstRowComponent,
    NotFirstRowComponent,
    TopRatedAlbumSectionComponent,
    TopRatedListsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
