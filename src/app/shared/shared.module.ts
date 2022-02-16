import {NgModule} from '@angular/core';
import {OctavePipe} from './octave.pipe';
import {PlayNoteService} from './play-note.service';
import {OscillatorService} from './oscillator.service';


@NgModule({
  declarations: [OctavePipe],
  providers: [
    PlayNoteService,
    OscillatorService
  ],
})
export class SharedModule {
}
