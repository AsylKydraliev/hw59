import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cardShadow]'
})

export class CardShadowDirective {
  @Input() set cardShadow (status: string){
      if(status === 'Ответ верный'){
        this.renderer.addClass(this.el.nativeElement, 'border-green');
        this.renderer.removeClass(this.el.nativeElement, 'border-red');
      } else if (status === 'Ответ не верный'){
        this.renderer.addClass(this.el.nativeElement, 'border-red');
        this.renderer.removeClass(this.el.nativeElement, 'border-green');
      } else {
        this.renderer.addClass(this.el.nativeElement, 'border-none');
      }
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
