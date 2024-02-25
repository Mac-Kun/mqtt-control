import { StartPageComponent } from './pages/start-page/start-page.component';
import { ApplicationModule, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },

  // start Page
  {
    path: 'start',
    canActivate:[],
    loadChildren: () => import('./pages/start-page/start-page.module').then(m => m.StartPageModule),
    data: { roles: null },
  },

  // mqtt-contol
  {
    path: 'mqtt-control',
    loadChildren: () => import('./pages/mqtt-control/mqtt-contol.module').then(m => m.MqttControlModule),
  },

  {
    path: 'start',
    component: StartPageComponent,
  },

  // default
  { path: '**', redirectTo: 'start' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      onSameUrlNavigation: 'reload',
      paramsInheritanceStrategy: 'always',
    })
  ],
  exports: [ RouterModule ],
  providers: [
  ]
})
export class AppRoutingModule {

}
export const routingComponents = [];
