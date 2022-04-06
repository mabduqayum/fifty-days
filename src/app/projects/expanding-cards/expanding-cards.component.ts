import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-expanding-cards',
  templateUrl: './expanding-cards.component.html',
  styleUrls: ['./expanding-cards.component.scss']
})
export class ExpandingCardsComponent implements OnInit {
  pics: string[] = [];
  activeIndex: number = 0;


  constructor() {
    for (let i = 1; i < 6; i++) {
      this.pics.push(`https://picsum.photos/200/600?random=${i}`)
    }
  }

  ngOnInit(): void {
  }

  activateImage(index: number): void {
    this.activeIndex = index;
  }

}
