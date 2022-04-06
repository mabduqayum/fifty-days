import {Component, OnInit} from '@angular/core';
import {Project} from "./project";

@Component({
  selector: 'projs',
  templateUrl: './projs.component.html',
  styleUrls: ['./projs.component.scss']
})
export class ProjsComponent implements OnInit {
  projects: Project[] = [
    new Project('Expanding Cards'),
    new Project('Progress Steps'),
    new Project('Rotating Navigation Animation'),
    new Project('Hidden Search Widget'),
    new Project('Blurry Loading'),
    new Project('Scroll Animation'),
    new Project('Split Landing Page'),
    new Project('Form Wave'),
    new Project('Sound Board'),
    new Project('Dad Jokes'),
    new Project('Event Keycodes'),
    new Project('Faq Collapse'),
    new Project('Random Choice Picker'),
    new Project('Animated Navigation'),
    new Project('Incrementing Counter'),
    new Project('Drink Water'),
    new Project('Movie App'),
    new Project('Background Slider'),
    new Project('Theme Clock'),
    new Project('Button Ripple Effect'),
    new Project('Drag N Drop'),
    new Project('Drawing App'),
    new Project('Kinetic Loader'),
    new Project('Content Placeholder'),
    new Project('Sticky Navbar'),
    new Project('Double Vertical Slider'),
    new Project('Toast Notification'),
    new Project('Github Profiles'),
    new Project('Double Click Heart'),
    new Project('Auto Text Effect'),
    new Project('Password Generator'),
    new Project('Good Cheap Fast'),
    new Project('Notes App'),
    new Project('Animated Countdown'),
    new Project('Image Carousel'),
    new Project('Hoverboard'),
    new Project('Pokedex'),
    new Project('Mobile Tab Navigation'),
    new Project('Password Strength Background'),
    new Project('3d Background Boxes'),
    new Project('Verify Account Ui'),
    new Project('Live User Filter'),
    new Project('Feedback Ui Design'),
    new Project('Custom Range Slider'),
    new Project('Netflix Mobile Navigation'),
    new Project('Quiz App'),
    new Project('Testimonial Box Switcher'),
    new Project('Random Image Feed'),
    new Project('Todo List'),
    new Project('Insect Catch Game'),
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
