import { Question } from './question.modal';
import { EventEmitter } from '@angular/core';

export class QuestionService {
  questionChange = new EventEmitter<Question[]>();
  amount!: number;
  private questions: Question[] = [
    new Question(
      'Директива, которая позволяет удалить или, наоборот, добавить элемент при определенном условии:',
      '*ngIf',
      'написать подсказку',
      'Нет ответа',
      false,
    ),
    new Question(
      'Директива, которая позволяет перебрать в шаблоне элементы массива:',
      '*ngFor',
      'написать подсказку',
      'Нет ответа',
      false,
    ),
    new Question(
      'Директива, которую можно встроить в шаблон конструкцию switch..case и в зависимости от ее результата выполнения выводить тот или иной блок:',
      '*ngSwitch',
      'написать подсказку',
      'Нет ответа',
      false,
    )
  ];

  getQuestions(){
    this.questionChange.emit(this.questions);
    return this.questions.slice();
  }
}
