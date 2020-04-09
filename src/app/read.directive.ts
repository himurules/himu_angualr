import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[blRead]'
})

export class ReadDirective {
  @HostBinding('class.fa-heart') isRead = true;
  @HostBinding('class.hovering') hovering = false;
  @HostListener('mouseenter') onHover() {
    this.hovering = true;
  }
  @HostListener('mouseleave') onHoverOff() {
    this.hovering = false;
  }
  @Input() set blRead(value) {
    this.isRead = value;
  }
}
