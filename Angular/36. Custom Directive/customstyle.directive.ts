import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomstyle]'
})
export class CustomstyleDirective {

  constructor(private e1:ElementRef) { 
  e1.nativeElement.style.color="red"
  }
}
