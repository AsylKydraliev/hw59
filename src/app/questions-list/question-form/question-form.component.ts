import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { QuestionService } from '../../shared/question.service';
import { Question } from '../../shared/question.modal';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent implements OnInit{
  questions!: Question[];
  @Input() index!: number;
  @ViewChild('inputValue') inputValue!: ElementRef;

  constructor(private questionService: QuestionService) {}

  ngOnInit(){
    this.questionService.questionChange.subscribe((questions:Question[]) => {
      this.questions = questions;
    });
  }

  getInputValue(index: number) {
    const answer = this.inputValue.nativeElement.value;
    this.questions = this.questionService.getQuestions();

    for(let i = 0; i < this.questions.length; i++) {
      this.questions[i].status = this.questions[i] === this.questionService.getQuestions()[index];
    }

    this.questions.forEach(item => {
      if(item.status) {
        if(answer === item.correctAnswer){
          item.answerStatus = 'Ответ верный';
        } else {
          item.answerStatus = 'Ответ не верный';
        }
      } else {
        item.answerStatus = 'Нет ответа';
      }
    });
  }
}
