import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'projs',
  templateUrl: './projs.component.html',
  styleUrls: ['./projs.component.scss']
})
export class ProjsComponent implements OnInit {
  projects: string[] = [
    'Expanding Cards',
    'Progress Steps',
    'Rotating Navigation Animation',
    'Hidden Search Widget',
    'Blurry Loading',
    'Scroll Animation',
    'Split Landing Page',
    'Form Wave',
    'Sound Board',
    'Dad Jokes',
    'Event Keycodes',
    'Faq Collapse',
    'Random Choice Picker',
    'Animated Navigation',
    'Incrementing Counter',
    'Drink Water',
    'Movie App',
    'Background Slider',
    'Theme Clock',
    'Button Ripple Effect',
    'Drag N Drop',
    'Drawing App',
    'Kinetic Loader',
    'Content Placeholder',
    'Sticky Navbar',
    'Double Vertical Slider',
    'Toast Notification',
    'Github Profiles',
    'Double Click Heart',
    'Auto Text Effect',
    'Password Generator',
    'Good Cheap Fast',
    'Notes App',
    'Animated Countdown',
    'Image Carousel',
    'Hoverboard',
    'Pokedex',
    'Mobile Tab Navigation',
    'Password Strength Background',
    '3d Background Boxes',
    'Verify Account Ui',
    'Live User Filter',
    'Feedback Ui Design',
    'Custom Range Slider',
    'Netflix Mobile Navigation',
    'Quiz App',
    'Testimonial Box Switcher',
    'Random Image Feed',
    'Todo List',
    'Insect Catch Game',
  ];
  colCount = 5;

  constructor() {
  }

  ngOnInit(): void {
    this.setColCount();
  }

  onResize($event?: any): void {
    this.setColCount($event.target.innerWidth);
  }

  setColCount(cnt?: number): void {
    cnt ??= window.innerWidth;
    cnt = cnt / 300 | 0;
    if (cnt > 5) cnt = 5;
    this.colCount = cnt;
  }

  goToProject(day: number): void {

  }
}
