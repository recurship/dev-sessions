import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-for-track-by',
  templateUrl: './for-track-by.component.html',
  styleUrls: ['./for-track-by.component.css']
})
export class ForTrackByComponent implements OnInit, OnDestroy {

  heroes = [
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 5, name: 'BatGirl' },
    { id: 3, name: 'Robin' },
    { id: 4, name: 'Flash' }
  ];
  heroes$ = Observable.of(this.heroes);

  intervalSub: any;

  constructor() { }

  ngOnInit() {
    /*this.intervalSub = setInterval(() => {
      const randomIndex1 = Math.floor(Math.random() * this.heroes.length);
      const randomIndex2 = Math.floor(Math.random() * this.heroes.length);
      console.log('random1', randomIndex1);
      console.log('random2', randomIndex2);
      if (randomIndex1 < this.heroes.length && randomIndex2 < this.heroes.length && randomIndex1 !== randomIndex2) {
        const temp = this.heroes[randomIndex1]['name'];
        this.heroes[randomIndex1]['name'] = this.heroes[randomIndex2]['name'];
        this.heroes[randomIndex2]['name'] = temp;
      }
    }, 5000);*/
  }

  trackByFn(index, hero) {
    console.log(hero);
    return hero ? hero.id : undefined;
  }

  ngOnDestroy() {
    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }

}
