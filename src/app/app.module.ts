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
import { AlbumPageComponent } from './album-page/album-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { LoginPageComponent } from './login-page/login-page/login-page.component';
import { MydarktwistedComponent } from './mydarktwisted/mydarktwisted.component';
import { WutangComponent } from './wutang/wutang.component';
import { JojiComponent } from './joji/joji.component';
import { JoeyComponent } from './joey/joey.component';
import { DomFikeComponent } from './dom-fike/dom-fike.component';
import { MaggieComponent } from './maggie/maggie.component';
import { WeekndComponent } from './weeknd/weeknd.component';
import { DrakeComponent } from './drake/drake.component';
import { MacComponent } from './mac/mac.component';
import { ReviewsComponent } from './reviews/reviews.component';

const appRoute: Routes = [
  {path: '', redirectTo: 'Login', pathMatch: 'full'}, //changed redirect to Home
  {path: 'Home', component: HomePageComponent},
  {path: 'AlbumPage', component: AlbumPageComponent},
  {path: 'ProfilePage', component: ProfilePageComponent},
  {path: 'Login', component: LoginPageComponent},
  {path: 'Kanye', component: MydarktwistedComponent},
  {path: 'Wutang', component: WutangComponent},
  {path: 'Joji', component:JojiComponent},
  {path: 'Joey', component: JoeyComponent},
  {path: 'DomFike', component:DomFikeComponent},
  {path: 'Maggie', component:MaggieComponent},
  {path: 'Week', component:WeekndComponent},
  {path: 'Drake', component:DrakeComponent},
  {path: 'Mac', component: MacComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationBarComponent,
    PopularReviewsComponent,
    FirstRowComponent,
    NotFirstRowComponent,
    TopRatedAlbumSectionComponent,
    TopRatedListsComponent,
    AlbumPageComponent,
    ProfilePageComponent,
    LoginPageComponent,
    MydarktwistedComponent,
    WutangComponent,
    JojiComponent,
    JoeyComponent,
    DomFikeComponent,
    MaggieComponent,
    WeekndComponent,
    DrakeComponent,
    MacComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
