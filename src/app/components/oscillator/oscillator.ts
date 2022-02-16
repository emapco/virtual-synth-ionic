import { Filter } from '../filter/filter';

export class Oscillator {
  public on: boolean;
  public wave: string;
  public gain: number;
  public octave: number;
  public detuneEnabled: boolean;
  public detune: number;
  public id: number;
  public filter: Filter;

  constructor(id: number) {
    this.id = id;
    this.on = (this.id === 1);
    this.wave = 'sine';
    this.gain = 50;
    this.octave = 0;
    this.detuneEnabled = false;
    this.detune = 0;
    this.filter = new Filter();
  }
}
