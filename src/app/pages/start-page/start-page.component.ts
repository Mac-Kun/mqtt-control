import { svgCelle } from './../../models/svgCelle.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss']
})
export class StartPageComponent implements OnInit {

  public fillColor: string[] = [];
  public list: svgCelle[] = [];

  constructor() { }

  public ngOnInit(): void {
    for (let index = 0; index < 520; index++) {
      this.list.push({
        status: 0,
        color: "grey"
      });

      this.fillColor.push('grey')
    }
  }

  public changeColor(index: number) {
    if (this.fillColor[index] === 'grey') {
      this.fillColor[index] = 'Yellow';
    } else {
      this.fillColor[index] = 'grey';
    }
  }

  public rightBorder(index: number): boolean {
    return ((index+1)%40 === 0);
  }

  public bottomBorder(index: number): boolean {
    return index > 479;
  }

}
