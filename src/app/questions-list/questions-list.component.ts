import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent {
  @Input() questionText = '';
  @Input() correctAnswer = '';
  @Input() prompt = '';
  @Input() answerStatus = '';
  borderColor = '';
  @Input() index!: number;

  getClassNameBorder(){
    if(this.answerStatus === 'Ответ верный'){
      this.borderColor = 'border-green';
    } else if(this.answerStatus === 'Ответ не верный') {
      this.borderColor = 'border-red';
    } else if(this.answerStatus === 'нет ответа'){
      this.borderColor = '';
    }
    return this.borderColor;
  }
}
