import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NavButtonComponent } from './nav-button/nav-button.component';
import { DiscoverIndexComponent } from './discover-index/discover-index.component';
import { DiscoverPostComponent } from './discover-post/discover-post.component';
import { DiscoverFeedComponent } from './discover-feed/discover-feed.component';
import { UserInfoComponent } from './user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavButtonComponent,
    DiscoverIndexComponent,
    DiscoverPostComponent,
    DiscoverFeedComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
