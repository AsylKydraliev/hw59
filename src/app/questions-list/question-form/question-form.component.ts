import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { QuestionService } from '../../shared/question.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.css']
})
export class QuestionFormComponent {
  @Input() index!: number;
  @ViewChild('inputValue') inputValue!: ElementRef;

  constructor(private questionService: QuestionService) {}

  getInputValue(index: number) {
    const answer = this.inputValue.nativeElement.value;
    this.questionService.getQuestions().forEach(question => {
      if(answer === this.questionService.getQuestions()[index].correctAnswer){
        this.questionService.getQuestions()[index].answerStatus = 'Ответ верный';
      } else if (answer === '') {
        question.answerStatus = 'Нет ответа';
      } else {
        this.questionService.getQuestions()[index].answerStatus = 'Ответ не верный';
      }
    });
    console.log(this.questionService.getQuestions())
  }
}
