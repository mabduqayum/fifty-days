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
    this.initImages();
  }

  ngOnInit(): void {
  }

  activateImage(index: number): void {
    if (index === this.activeIndex) {
      this.activeIndex = -1;
      return;
    }
    this.activeIndex = index;
  }


  private initImages() {
    let width = window.innerWidth - 40 | 0;
    let height = window.innerHeight - 40 | 0;
    for (let i = 1; i < 6; i++) {
      this.pics.push(`https://picsum.photos/${width}/${height}.webp?random=${i}`)
    }
  }

}
