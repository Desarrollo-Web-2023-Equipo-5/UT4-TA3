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
import { SearchComponent } from './pages/search/search.component';
import { UploadComponent } from './pages/upload/upload.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DiscoverComponent } from './pages/discover/discover.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavButtonComponent,
    DiscoverIndexComponent,
    DiscoverPostComponent,
    DiscoverFeedComponent,
    UserInfoComponent,
    SearchComponent,
    UploadComponent,
    ChatComponent,
    ProfileComponent,
    DiscoverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
