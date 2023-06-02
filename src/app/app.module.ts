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
import { ImageOverlayComponent } from './image-overlay/image-overlay.component';
import { OverlayComponent } from './overlay/overlay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './pages/discover/slider/slider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HammerModule } from '@angular/platform-browser';
import { SliderElementComponent } from './pages/discover/slider-element/slider-element.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchComponent,
    UploadComponent,
    ChatComponent,
    ProfileComponent,
    DiscoverComponent,
    ImageOverlayComponent,
    OverlayComponent,
    SliderComponent,
    SliderElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
