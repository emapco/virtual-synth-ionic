import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPage } from './filter-page.component';

import { FilterPageRoutingModule } from './filter-routing.module';
import {FilterComponent} from '../components/filter/filter.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: FilterPage }]),
    FilterPageRoutingModule,
  ],
  declarations: [
    FilterPage,
    FilterComponent,
  ]
})
export class FilterPageModule {}
