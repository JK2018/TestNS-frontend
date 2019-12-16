import { DeckService } from './service/deck.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeckComponent } from './component/deck/deck.component';
import { LandingPageComponent } from './component/landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DeckService],
  bootstrap: [AppComponent]
})
export class AppModule { }
