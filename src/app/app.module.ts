import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchFriendsComponent } from './search-friends/search-friends.component';
import { NavbarComponent } from './navbar/navbar.component';
const myRoute:Routes=[
  {
    path:"",
    component:AddFriendsComponent
  },
  {
    path:"viewfriends",
    component:ViewFriendsComponent
  },
  {
    path:"searchfriends",
    component:SearchFriendsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AddFriendsComponent,
    ViewFriendsComponent,
    SearchFriendsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
