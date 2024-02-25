import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit, OnDestroy {

  @Input() public topic: string = '';

  public subscribeMessage: IMqttMessage | undefined;
  public subscribeFormGroup: FormGroup = new FormGroup({
    subscribe: new FormControl(''),
  });

 private subscription: Subscription | undefined;

  constructor(private _mqttService: MqttService) {

  }

  ngOnInit(): void {
    console.log('topic ', this.topic);
  }

  public ngOnDestroy() {
    // this.subscription.unsubscribe();
  }

  subscribeNewTopic(): void {
    console.log('inside subscribe new topic')
    this.subscription = this._mqttService.observe(this.topic).subscribe((message: IMqttMessage) => {
      this.subscribeMessage = message;
      console.log('msg: ', message)
      // this.logMsg('Message: ' + message.payload.toString() + '<br> for topic: ' + message.topic);
    });
    // this.logMsg('subscribed to topic: ' + this.topic)
  }


  public subscribe(): void {

  }
}
