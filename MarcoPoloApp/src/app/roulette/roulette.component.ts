import { Component } from '@angular/core';
import { NgxWheelModule, Item } from 'ngx-wheel';

@Component({
  selector: 'app-spinning-wheel',
  templateUrl: './roulette.component.html',
  styleUrls: ['./roulette.component.css']
})
export class RouletteComponent {

    title = 'Spinning Wheel';
    items: Item[] = [
      {id:1, text:'item 1', fillStyle: '#eae56f'},
      {id:2, text:'item 2', fillStyle: '#89f26e'},
      {id:3, text:'item 3', fillStyle: '#7de6ef'},
      {id:4, text:'item 4', fillStyle: '#e7706f'},
      {id:5, text:'item 5', fillStyle: '#eae56f'},
      {id:6, text:'item 6', fillStyle: '#89f26e'},
      {id:7, text:'item 7', fillStyle: '#7de6ef'},
      {id:8, text:'item 8', fillStyle: '#e7706f'},
    ]
    idToLandOn = this.items[Math.floor(Math.random() * this.items.length)].id;
    after(){
      console.log('after');
      if (this.idToLandOn == 1) {
        alert('Jackpot!');
      }
    }
    before(){
      console.log('before');
    }
    myreset() {
      console.log("reset");
      this.idToLandOn = this.items[Math.floor(Math.random() * this.items.length)].id;
      console.log('this.idToLandOn--', this.idToLandOn);
    }

}
