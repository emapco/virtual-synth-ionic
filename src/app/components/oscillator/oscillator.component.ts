import {Component, OnDestroy, OnInit} from '@angular/core';
import {Oscillator} from './oscillator';
import {OctaveEnum} from '../../enums/octave.enum';
import {OscillatorService} from '../../shared/oscillator.service';
import {OctavePipe} from '../../shared/octave.pipe';

@Component({
  selector: 'app-osc-comp',
  templateUrl: './oscillator.component.html',
  styleUrls: ['./oscillator.component.css'],
  providers: [OscillatorService, OctavePipe],
})
export class OscillatorComponent implements OnInit, OnDestroy {
  public waves = ['sine', 'square', 'sawtooth', 'triangle'];
  public displayOctave: string | number = '-';
  public osc: Oscillator;
  public octaveEnums: typeof OctaveEnum = OctaveEnum;

  constructor(
    private octavePipe: OctavePipe,
    private oscService: OscillatorService) {

  }

  changeOctave(mode: number): void {
    this.osc.octave = this.octavePipe.transform(this.osc.octave, mode);
    this.displayOctave = (this.osc.octave === 0) ? '-' : this.osc.octave;
  }

  ngOnInit() {
    OscillatorService.addRef(this);
    this.osc = new Oscillator(this.oscService.oscillators.length);
  }

  ngOnDestroy() {
    OscillatorService.removeRef(this);
  }
}
