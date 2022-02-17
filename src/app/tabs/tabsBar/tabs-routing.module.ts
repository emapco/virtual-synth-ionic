import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabsBar',
    component: TabsPage,
    children: [
      {
        path: 'keyboard',
        loadChildren: () => import('../keyboardTab/keyboard.module').then(m => m.KeyboardPageModule)
      },
      {
        path: 'oscillators',
        loadChildren: () => import('../oscillatorTab/oscillator.module').then(m => m.OscillatorsPageModule)
      },
      {
        path: 'effects',
        loadChildren: () => import('../effectsTab/effects.module').then(m => m.EffectsPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/tabsBar/keyboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/tabsBar/keyboard',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
