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
  @Input() status = false;
  @Input() index!: number;
  isOpenPrompt = false;
}
