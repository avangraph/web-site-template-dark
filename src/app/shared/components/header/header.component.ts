import { animate, sequence, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // host: {
  //   '[@menuOverlayAnimationTrigger]': 'someExpression',
  //   '(@menuOverlayAnimationTrigger.start)': 'captureStartEvent($event)',
  //   '(@menuOverlayAnimationTrigger.done)': 'captureDoneEvent($event)',
  // },
  // animations: [
  //   trigger('menuOverlayAnimationTrigger', [
  //     transition(':enter', [
  //       style({ filter: 'blur(0px)'}),
  //       animate('1s', style({
  //         filter: 'blur(20px)'
  //       })),
  //     ]),
  //     transition(':leave', [
  //       animate('1s', style({ opacity: 0 })),
  //     ]),
  //   ]),
  // ],
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isMenuOpen = false;
  isOverlayShow = false;
  someExpression: any = false;

  ngOnInit(): void {
  }


  openMenu(): void {
    if(!this.isMenuOpen) {
      this.isMenuOpen = true;
    } else {
      this.isMenuOpen = false;
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  // captureStartEvent(event: AnimationEvent) {
  //   if(this.isMenuOpen) {
  //     this.isOverlayShow = true;
  //   }
  //   console.log(event);
  // }

  // captureDoneEvent(event: AnimationEvent) {
  //   if(!this.isMenuOpen) {
  //     this.isOverlayShow = false;
  //   }
  //   console.log(event);
  //   // the toState, fromState and totalTime data is accessible from the event variable
  // }

}
