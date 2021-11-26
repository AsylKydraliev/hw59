import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QuestionsListComponent } from './questions-list/questions-list.component';
import { QuestionService } from './shared/question.service';
import { QuestionFormComponent } from './questions-list/question-form/question-form.component';
import { FormsModule } from '@angular/forms';
import { CardShadowDirective } from './directives/cardShadow.directive';
import { PromptCloseOpenDirective } from './directives/promptCloseOpen.directive';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsListComponent,
    QuestionFormComponent,
    CardShadowDirective,
    PromptCloseOpenDirective
  ],
  imports: [
    FormsModule,
    BrowserModule
  ],
  providers: [QuestionService],
  bootstrap: [AppComponent]
})
export class AppModule {}
