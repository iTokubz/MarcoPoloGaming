import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './app-quiz/app-quiz.component';
import { HomeComponent } from './home/home.component';
import { MarclifeComponent } from './marclife/marclife.component';
import { RouletteComponent } from './roulette/roulette.component';


const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: '', component: HomeComponent },
  { path: 'marclife', component: MarclifeComponent },
  { path: 'roulette', component: RouletteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
