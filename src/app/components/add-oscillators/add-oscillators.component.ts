import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OscillatorEnum} from '../../enums/osc.enum';

@Component({
  selector: 'app-add-oscillators',
  templateUrl: './add-oscillators.component.html',
  styleUrls: ['./add-oscillators.component.scss'],
})
export class AddOscillatorsComponent implements OnInit {
  @Output() changedNrOscillators = new EventEmitter();
  public oscEnums: typeof OscillatorEnum = OscillatorEnum;
  public numberOsc = 1;

  constructor() { }

  ngOnInit() {}

  changeNrOsc(mode: number): void {
    if (mode === this.oscEnums.oscillatorIncrease) {
      if (this.numberOsc < 8) {
        this.numberOsc++;
        this.changedNrOscillators.emit({changeMode: mode, nrOsc: this.numberOsc});
      }
    } else {
      if (this.numberOsc > 1) {
        this.numberOsc--;
        this.changedNrOscillators.emit({changeMode: mode, nrOsc: this.numberOsc});
      }
    }
  }

}
