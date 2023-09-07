import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appAlphanumeric]'
})
export class AlphanumericDirective {

  
  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const regex = /^[a-zA-Z0-9]*$/; 

    if (!regex.test(input.value)) {
      input.value = input.value.replace(/[^a-zA-Z0-9]/g, ''); 
    }
  }

}
