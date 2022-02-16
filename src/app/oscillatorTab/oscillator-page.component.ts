import { Component } from '@angular/core';
import {OscillatorEnum} from '../enums/osc.enum';
import {OscillatorService} from '../shared/oscillator.service';

@Component({
  selector: 'app-osc-tab',
  templateUrl: 'oscillator-page.component.html',
  styleUrls: ['oscillator-page.component.scss']
})
export class OscillatorPage {
  public nrOscillators = 1;
  constructor(public oscService: OscillatorService) {

  }

  onOscillatorsChanged(result: any) {
    if (result.changeMode === OscillatorEnum.oscillatorDecrease) {
      OscillatorService.removeLastOsc();
    }
    this.nrOscillators = result.nrOsc;
  }
}
