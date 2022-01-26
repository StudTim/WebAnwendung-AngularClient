import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnChanges {

  
  @Input('appFocus')
  private focused: boolean = false;

  constructor(public element: ElementRef<HTMLElement>) {
  }

  public ngOnChanges(changes: SimpleChanges): void {
    // ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked.
    if (this.focused) {
      setTimeout(() => this.element.nativeElement.focus(), 0);
    }
  }

}
