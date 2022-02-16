import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OscillatorPage } from './oscillator-page.component';

const routes: Routes = [
  {
    path: '',
    component: OscillatorPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OscillatorPageRoutingModule {}
