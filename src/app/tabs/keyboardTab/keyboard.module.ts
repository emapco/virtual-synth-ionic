import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KeyboardPage } from './keyboard-page.component';

import { KeyboardPageRoutingModule } from './keyboard-routing.module';
import {KeyboardComponent} from '../../components/keyboard/keyboard.component';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    KeyboardPageRoutingModule,
  ],
  declarations: [
    KeyboardPage,
    KeyboardComponent,
  ]
})
export class KeyboardPageModule {}
