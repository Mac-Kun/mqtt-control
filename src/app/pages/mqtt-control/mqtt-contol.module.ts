import { MqttControlComponent } from './mqtt-control.component';
import { PagesModule } from './../page.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
  {
  path: '',
  component: MqttControlComponent,
  },
];

@NgModule({
  declarations: [ MqttControlComponent, SubscribeComponent ],
  imports: [
    PagesModule,
    RouterModule.forChild(routes),
  ],
})
export class MqttControlModule {
}
