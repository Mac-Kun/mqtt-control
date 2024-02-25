import { PagesModule } from './pages/page.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IMqttServiceOptions, MqttModule } from "ngx-mqtt";


const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: '192.168.188.50',
  port: 9001,
  // protocol: (env.mqtt.protocol === "wss") ? "wss" : "ws",
  path: '/mqtt',
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
