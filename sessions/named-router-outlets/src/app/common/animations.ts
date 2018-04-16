import { trigger, transition, animate, style } from "@angular/animations";
import { Component, HostBinding } from "@angular/core";

export const slideIn = trigger('slideIn', [
  transition(':enter', [
    style({ transform: 'translateX(100%)' }),
    animate(300, style({ transform: 'translateX(0%)' }))
  ])
])

@Component({
  selector: '',
  template: ''
})
export class SidebarAnimatedPanel {
  @HostBinding('@slideIn')
  animate = true;

  @HostBinding('style.display')
  display = 'block';
}