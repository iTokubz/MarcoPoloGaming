import { Component, OnInit } from '@angular/core';
import { Question } from '../../question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './app-quiz.component.html',
  styleUrls: ['./app-quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions: Question[] = [
    {
      id: 1,
      question: 'Comment s\'appelle la cousine de marc',
      answers: ['Juliette', 'Emilie', 'Louise', 'Marine'],
      correctAnswer: 'Juliette'
    },
    {
      id: 2,
      question: 'Quel âge a t\'elle ?',
      answers: ['17', '18', '14', '16'],
      correctAnswer: '16'
    },
    {
      id: 3,
      question: 'Qu\'est-ce qu\'elle aime ?',
      answers: ['le penis', 'oranges', 'les bananes', 'l\'argent'],
      correctAnswer: 'le penis'
    },
    {
      id: 4,
      question: 'Que préfère marc',
      answers: ['CS:GO', 'CS:GO', 'CS:GO', 'CS:GO'],
      correctAnswer: 'CS:GO'
    },
    {
      id: 4,
      question: 'Que préfère marc',
      answers: ['CS:GO', 'CS:GO', 'CS:GO', 'CS:GO'],
      correctAnswer: 'CS:GO'
    },
    {
      id: 4,
      question: 'Que préfère marc',
      answers: ['CS:GO', 'CS:GO', 'CS:GO', 'CS:GO'],
      correctAnswer: 'CS:GO'
    },
    {
      id: 4,
      question: 'Que préfère marc',
      answers: ['CS:GO', 'CS:GO', 'CS:GO', 'CS:GO'],
      correctAnswer: 'CS:GO'
    },
    {
      id: 4,
      question: 'Que préfère marc',
      answers: ['CS:GO', 'CS:GO', 'CS:GO', 'CS:GO'],
      correctAnswer: 'CS:GO'
    },
  ];
  score = 0;
  quizEnded: boolean = false;

  ngOnInit(): void {
  }

  onSubmit() {
    this.checkAnswers();
    this.quizEnded = true;
    console.log(`Score: ${this.score}`);
  }

  resetQuiz() {
    this.score = 0;
    this.quizEnded = false;
    this.questions.forEach(question => {
      question.userAnswer = undefined;
    });
  }

  checkAnswers() {
    this.questions.forEach(question => {
      if (question.correctAnswer === question.userAnswer) {
        this.score++;
      }
    });
  }

}
