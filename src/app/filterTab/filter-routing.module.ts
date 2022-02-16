import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterPage } from './filter-page.component';

const routes: Routes = [
  {
    path: '',
    component: FilterPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilterPageRoutingModule {}
