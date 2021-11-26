import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from './shared/question.service';
import { Question } from './shared/question.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  questions!: Question[];
  count = 0;
  @Input() answerStatus = '';
  constructor(public questionService: QuestionService) {};


  ngOnInit(){
    this.questions = this.questionService.getQuestions();
    this.questionService.questionChange.subscribe((questions:Question[]) => {
      this.questions = questions;
    });
    this.count = this.questionService.amount;
  }
}
