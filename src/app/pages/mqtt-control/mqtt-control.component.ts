import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mqtt-control',
  templateUrl: './mqtt-control.component.html',
  styleUrls: ['./mqtt-control.component.scss']
})
export class MqttControlComponent implements OnInit, OnDestroy {

  public message: string = '';
  // public subscribeTopic: string = '/oben/gross/temp';
  public mqttFormGroup: FormGroup = new FormGroup({
    topic: new FormControl(''),
    subscribe: new FormControl(''),
    publish: new FormControl(''),
    });

  private subscription: Subscription = new Subscription;

  constructor(private _mqttService: MqttService) {
  }

  ngOnInit(): void {
    console.log('HI');
  }

  public subscribe(): void {
    this.subscribeNewTopic();
  }

  subscribeNewTopic(): void {
    this.subscription.unsubscribe();
    console.log('inside subscribe new topic')
    this.subscription = this._mqttService.observe(this.mqttFormGroup.value.topic).subscribe((message: IMqttMessage) => {
      console.log('msg: ', message.payload.toString());
        this.mqttFormGroup.patchValue({
        ...this.mqttFormGroup.value,
        subscribe: message.payload.toString(),
      });
    });
  }

  public publish(): void {
    this.unsafePublish(this.mqttFormGroup.value.topic, this.mqttFormGroup.value.publish);
  }

  public unsafePublish(topic: string, message: string): void {
    this._mqttService.unsafePublish(topic, message, {qos: 1, retain: true});
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
