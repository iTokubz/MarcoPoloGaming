export interface Question {
    id: number;
    question: string;
    answers: string[];
    correctAnswer: string;
    userAnswer?: string;
  }