import {Component, HostListener} from '@angular/core';
import {PlayNoteService} from '../../shared/play-note.service';
import {NoteFrequencies} from '../../enums/note-frequencies';


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
      element.style.color = 'white';
    }
  }

  animateKeyRelease(element: HTMLElement) {
    let bgColor = 'rgb(33, 37, 41)';
    let color = 'white';
    // @ts-ignore
    if (element.parentElement.id === 'white-keys-container') {
      bgColor = 'white';
      color = 'black';
    }
    element.style.backgroundColor = bgColor;
    element.style.color = color;
  }

  /**
   * Determines if the KeyboardEvent contains a supported key value.
   * If so then it returns the key's frequency
   * otherwise it returns a null string
   *
   * @param event : KeyboardEvent
   */
  isSupportedKey(event: KeyboardEvent) {
    const key = event.key.toUpperCase();
    return (Object.keys(NoteFrequencies).includes(`${key}`)) ? key : '';
  }
}
