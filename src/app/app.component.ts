import { Component, OnInit } from '@angular/core';
import { QuestionService } from './shared/question.service';
import { Question } from './shared/question.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  questions!: Question[];
  constructor(private questionService: QuestionService) {};

  ngOnInit(){
    this.questions = this.questionService.getQuestions();
    this.questionService.questionChange.subscribe((questions:Question[]) => {
      this.questions = questions;
    });
  }
}
