import { IMenu } from './models/menu.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'Mqtt';
  public showFiller: boolean = false;

  public menuOptions: IMenu [] = [
    {icon: 'home', routerLink: 'start', name: 'StartPage'},
    {icon: 'settings', routerLink: 'mqtt-control', name: 'MQTT Control'},
  ];

}
