import { PagesModule } from './../page.module';
import { StartPageComponent } from './start-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  component: StartPageComponent,
  },
];

@NgModule({
  declarations: [ StartPageComponent ],
  imports: [
    PagesModule,
    RouterModule.forChild(routes),
  ],
})
export class StartPageModule {
}
