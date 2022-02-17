import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {EffectsPage} from './effects-page.component';

import {EffectsPageRoutingModule} from './effects-routing.module';
import {FilterComponent} from '../../components/filter/filter.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: EffectsPage}]),
    EffectsPageRoutingModule,
  ],
  declarations: [
    EffectsPage,
    FilterComponent,
  ]
})
export class EffectsPageModule {
}
