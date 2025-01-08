import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appTerminalTextEffect]'
})
export class TerminalTextEffectDirective {

  text = "Backend";

  private elementRef = inject(ElementRef)


  private TypeConsole() {
    let visible = true;
    let console = this.elementRef.nativeElement
  }


}
