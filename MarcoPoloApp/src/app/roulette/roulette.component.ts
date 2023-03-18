import { Component, ViewChild, ElementRef } from '@angular/core';
import { NgxWheelComponent } from 'ngx-wheel';

@Component({
  selector: 'app-spin-wheel',
  template: `
    <div class="wheel-container">
      <ngx-wheel #wheel [segments]="segments"></ngx-wheel>
      <button (click)="spinWheel()">Spin</button>
    </div>
  `,
  styles: [`
    .wheel-container {
      position: relative;
      width: 500px;
      height: 500px;
    }

    button {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      padding: 12px 24px;
      font-size: 24px;
      background-color: #3498db;
      border: none;
      color: white;
      cursor: pointer;
    }
  `]
})
export class RouletteComponent {
  
}
