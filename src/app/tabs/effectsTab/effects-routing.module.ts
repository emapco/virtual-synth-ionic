import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsPage } from './effects-page.component';

const routes: Routes = [
  {
    path: '',
    component: EffectsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EffectsPageRoutingModule {}
