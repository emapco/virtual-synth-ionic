import { Pipe, PipeTransform } from '@angular/core';
import { OctaveEnum} from "../enums/octave.enum";

@Pipe({
  name: 'octavePipe'
})
export class OctavePipe implements PipeTransform {
  transform(octave: number, mode: number): number {
      if (mode === OctaveEnum.octaveIncrease  && octave < 4) {
        octave++;
      } else if (mode === OctaveEnum.octaveDecrease && octave > -3) {
        octave--;
      }
      return octave
  }
}
