import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CricketScoreComponent } from './cricket-score/cricket-score.component';

import { CricketService } from './services/cricket.service';

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';
import { VgStreamingModule } from 'videogular2/streaming';
import { VgImaAdsModule } from 'videogular2/ima-ads';

import { videoPlayerComponent } from './video-player/video-player.component';


const appRoutes = [
  { path: 'cric', component: CricketScoreComponent },
  { path: 'video', component: videoPlayerComponent },
  { path: '', component: CricketScoreComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CricketScoreComponent,
    videoPlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    VgStreamingModule,
    VgImaAdsModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [CricketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
