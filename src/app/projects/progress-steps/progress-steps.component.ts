import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-steps',
  templateUrl: './progress-steps.component.html',
  styleUrls: ['./progress-steps.component.scss']
})
export class ProgressStepsComponent implements OnInit {
  activeItem = 0;
  progress = '0';
  items = [1, 2, 3, 4];

  constructor() {
  }

  ngOnInit(): void {
  }

  updateProgress(): void {
    this.progress = (100 / (this.items.length - 1) * this.activeItem).toFixed(2) + '%';
  }

  nextItem() {
    this.activeItem++;
    this.updateProgress();
  }

  prevItem() {
    this.activeItem--;
    this.updateProgress();
  }
}
