import {Component, OnInit} from '@angular/core';
import {Filter} from './filter';
import {OscillatorService} from '../../shared/oscillator.service';
import {Oscillator} from '../oscillator/oscillator';

@Component({
  selector: 'app-filter-comp',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [OscillatorService]
})
export class FilterComponent implements OnInit {
  public filterTypes: string[] = ['highpass', 'lowpass', 'bandpass', 'lowshelf', 'highshelf', 'peaking', 'notch'];
  public displaySliderFreq = 49.5;
  public filter: Filter;
  public appliedOsc = 0;

  constructor(public oscService: OscillatorService) {
    this.filter = new Filter();
  }

  // used for displayWith directive
  formatFrequency(value: number) {
    const oldMin = 1;
    const oldMax = 100;
    const newMin = Math.log(10);
    const newMax = Math.log(20000);
    const factor = (newMax-newMin) / (oldMax - oldMin);
    return Math.round(Math.exp(newMin + factor*(value-oldMin)));
  }

  formatInverseFrequency(value: number) {
    const oldMin = 1;
    const oldMax = 100;
    const newMin = Math.log(10);
    const newMax = Math.log(20000);
    const factor = (newMax-newMin) / (oldMax - oldMin);
    return Math.round((Math.log(value)- newMin)/factor + oldMin);
  }

  /**
   * called so ngModelChange updates filter attribute with the scaled value
   *
   * @param event
   */
  updateFrequency(event: any) {
    this.displaySliderFreq = Number(event);
    return this.formatFrequency(Number(event));
  }

  /**
   * called when clicking on a filter oscillator button
   *
   * @param osc: Oscillator object that contains the filter object
   */
  changeFilter(osc: Oscillator) {
    this.appliedOsc = osc.id-1;  // -1 for array indexing
    this.filter = osc.filter;
    this.displaySliderFreq = this.formatInverseFrequency(this.filter.frequency);
  }

  ngOnInit(): void {
    if (this.oscService.oscillators.length) {
      this.filter = this.oscService.oscillators[this.appliedOsc].filter;
    }
    this.displaySliderFreq = this.formatInverseFrequency(this.filter.frequency);
  }
}
