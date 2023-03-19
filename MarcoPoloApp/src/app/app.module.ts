import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- import FormsModule

import { NgxWheelModule } from 'ngx-wheel';
import { Chart } from 'chart.js';

import { AppComponent } from './app.component';
import { QuizComponent } from './app-quiz/app-quiz.component';
import { ResultComponent } from './result/result.component'; // <-- change import statement
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { MarclifeComponent } from './marclife/marclife.component';
import { RouletteComponent } from './roulette/roulette.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ResultComponent,
    HomeComponent,
    MarclifeComponent,
    RouletteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
