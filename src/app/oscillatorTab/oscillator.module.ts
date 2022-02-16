import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OscillatorPage } from './oscillator-page.component';

import { OscillatorPageRoutingModule } from './oscillator-routing.module';
import {OscillatorComponent} from '../components/oscillator/oscillator.component';
import {AddOscillatorsComponent} from '../components/add-oscillators/add-oscillators.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    OscillatorPageRoutingModule
  ],
  declarations: [
    OscillatorPage,
    OscillatorComponent,
    AddOscillatorsComponent,
  ]
})
export class OscillatorsPageModule {}
