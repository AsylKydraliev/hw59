import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[closeAndOpenItem]'
})

export class PromptCloseOpenDirective {
  @HostBinding('class.block') isBlock = false;
  @HostListener('click') addClass (){
    this.isBlock = true;
  }
}
