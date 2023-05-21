import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './pages/search/search.component';
import { UploadComponent } from './pages/upload/upload.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DiscoverComponent } from './pages/discover/discover.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
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
