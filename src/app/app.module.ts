import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CricketScoreComponent } from './cricket-score/cricket-score.component';

import { CricketService } from './services/cricket.service';


const appRoutes = [
  {path: 'cric',component: CricketScoreComponent},
  {path: '',component: CricketScoreComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    CricketScoreComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes)
  ],
  providers: [CricketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
