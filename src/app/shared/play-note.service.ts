import {Injectable} from '@angular/core';
import {OscillatorService} from './oscillator.service';
import {NoteFrequencies} from '../enums/note-frequencies';

@Injectable({
  providedIn: 'root'
})
export class PlayNoteService {
  private readonly audioContext;

  constructor(private oscService: OscillatorService) {
    // @ts-ignore
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  playNotes(noteKey: string) {
    this.oscService.oscillators.forEach(async (osc) => {
      if (osc.on) {
        // create synthesizer's audio components
        const audioVolume = this.audioContext.createGain();
        const audioFilter = this.audioContext.createBiquadFilter();
        const audioOsc = this.audioContext.createOscillator();
        // @ts-ignore
        const keyFrequency = this.calculateFreq(NoteFrequencies[noteKey], osc.octave);
        // connect filter nodes if enabled
        if (osc.filter.enabled) {
          audioOsc.connect(audioFilter);
          audioFilter.connect(audioVolume);
          audioFilter.type = Object(osc.filter.type);
          audioFilter.frequency.value = osc.filter.frequency;
        } else {
          audioOsc.connect(audioVolume); // can't connect osc to gain if using filter or it bypasses filter.
        }

        // connect volume to AudioContext
        audioVolume.connect(this.audioContext.destination);
        // set the nodes attributes
        audioOsc.type = Object(osc.wave);
        audioOsc.frequency.value = keyFrequency;
        if (osc.detuneEnabled) {
          audioOsc.detune.setTargetAtTime(osc.detune, 0, .01);
        }
        audioVolume.gain.value = osc.gain / 100;
        audioVolume.gain.setTargetAtTime(0, this.audioContext.currentTime, .1);

        // start and stop oscillator
        audioOsc.start(0);
        audioOsc.stop(this.audioContext.currentTime + 2.5);
      }
    });
  }

  /**
   * Calculates the frequency of the note with the lowest note on the keyboardTab
   * being middle C (440 HZ)
   *
   * @param baseFreq
   * @param octave
   */
  calculateFreq(baseFreq: number, octave: number) {
    if (octave === 0) {
      return baseFreq;
    } else {
      return Math.round(Math.pow(2, octave)*baseFreq*1000)/1000;
    }
  }
}
