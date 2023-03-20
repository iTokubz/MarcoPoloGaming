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
      {id:1, text:'Un tee-shirt dédicacé', fillStyle: 'yellow'},
      {id:2, text:'Un caleçon usagé', fillStyle: 'green'},
      {id:3, text:'Les lunettes flammes', fillStyle: 'blue'},
      {id:4, text:'Les pessos', fillStyle: 'red'},
      {id:5, text:'Un cours de chinois', fillStyle: 'brown'},
      {id:6, text:'Un game de CS:GO', fillStyle: 'orange'},
      {id:7, text:'Le nano de Marc', fillStyle: 'violet'},

    ]
    idToLandOn = this.items[Math.floor(Math.random() * this.items.length)].id;
    after(){
      console.log('after');
      function questioner(question: RouletteComponent) {
        return `<div data-val-id="test"> test </div>`;
    }
      if (this.idToLandOn == 1)
        alert('👕👕');
      if (this.idToLandOn == 2)
        alert('🩳🩳');
      if (this.idToLandOn == 3)
        alert('🔥🔥');
      if (this.idToLandOn == 4)
        alert('💵💵');
      if (this.idToLandOn == 5)
        alert('🇨🇳🇨🇳');
      if (this.idToLandOn == 6)
        alert('🎮🎮');
      if (this.idToLandOn == 7)
        alert('💻💻');
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