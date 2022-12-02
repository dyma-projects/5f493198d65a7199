import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  @HostListener('window:keydown', ['$event']) private windowKeydown(
    e: KeyboardEvent
  ) {
    if (e.key === 'ArrowUp') {
      this.el.nativeElement.style.color = 'red';
    } else if (e.key === 'ArrowDown') {
      this.el.nativeElement.style.color = 'green';
    } else if (e.key === 'ArrowRight') {
      this.el.nativeElement.style.color = 'blue';
    } else if (e.key === 'ArrowLeft') {
      this.el.nativeElement.style.color = 'yellow';
    }
  }
  constructor(private el: ElementRef) {}
}
