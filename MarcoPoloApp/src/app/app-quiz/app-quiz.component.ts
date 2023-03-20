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
      question: 'Comment s\'appelle le personnage principal',
      answers: ['Marc', 'Marco', 'Ce giga BG de Marc', 'Ce putin de giga BG de Marc'],
      correctAnswer: 'Ce putin de giga BG de Marc'
    },
    {
      id: 2,
      question: 'Quel âge a ce putin de giga BG de Marc ?',
      answers: ['12', '69', '4', '20'],
      correctAnswer: '20'
    },
    {
      id: 3,
      question: 'Que préfere ce putin de giga BG de Marc ?',
      answers: ['Les claquettes', 'CS:GO', 'Epitech', 'L\'argent'],
      correctAnswer: 'CS:GO'
    },
    {
      id: 4,
      question: 'Combien de voitures de gandarmerie veski t\'il',
      answers: ['5 + un vêlo', '3 dont Kevin sur son dromadaire', '3', '1 + Mohammed Henni'],
      correctAnswer: '3'
    },
    {
      id: 5,
      question: 'Combien de Pessos avait\"il sur le siéges de sa polo ?',
      answers: ['200', 'Tro pour toi', '150', 'Une année à Epitech'],
      correctAnswer: 'Une année à Epitech'
    },
    {
      id: 6,
      question: 'Si Marc a deux choix lequel choisis t\'il ?',
      answers: ['Femmes', 'CS:GO'],
      correctAnswer: 'CS:GO'
    },
    {
      id: 7,
      question: 'Pourquoi Marc porte des lunettes flammes ?',
      answers: ['Pour éteindre la concurence', 'Il s\éblouit dans son propre charme', 'Le crédit de la JAM'],
      correctAnswer: 'Pour éteindre la concurence'
    },
    {
      id: 8,
      question: 'La madre de Marc parle chinois ?',
      answers: ['Vrai', 'Faux'],
      correctAnswer: 'Vrai'
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
