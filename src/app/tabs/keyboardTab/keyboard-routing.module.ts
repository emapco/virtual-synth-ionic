import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyboardPage } from './keyboard-page.component';

const routes: Routes = [
  {
    path: '',
    component: KeyboardPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KeyboardPageRoutingModule {}
