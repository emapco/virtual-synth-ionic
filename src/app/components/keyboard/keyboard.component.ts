import {Component, HostListener} from '@angular/core';
import {PlayNoteService} from '../../shared/play-note.service';


@Component({
  selector: 'app-keyboard-comp',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css'],
})
export class KeyboardComponent {

  constructor(private playNoteSer: PlayNoteService) {}

  // listener must be in a component
  @HostListener('touchstart', ['$event'])
  handleTouchEvent(event: TouchEvent) {
    const element = event.target as HTMLElement;
    if (element.tagName === 'KBD') {
      this.playNoteSer.playNotes(element.id);
      this.animateKeyPress(element.id);
    }
  }

  @HostListener('touchend', ['$event'])
  handleTouchRelease(event: TouchEvent) {
    const element = event.target as HTMLElement;
    if (element.tagName === 'KBD') {
      this.animateKeyRelease(element);
    }
  }

  animateKeyPress(key: string) {
    const element = document.getElementById(key);
    if (element != null) {
      element.style.backgroundColor = 'gray';
    }
  }

  animateKeyRelease(element: HTMLElement) {
    const whiteIvory = '#fffff0';
    let bgColor = '#1e2023';
    // @ts-ignore
    if (element.parentElement.id === 'white-keys-container') {
      bgColor = whiteIvory;
    }
    element.style.backgroundColor = bgColor;
  }

}
