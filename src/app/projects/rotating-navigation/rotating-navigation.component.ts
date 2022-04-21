import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotating-navigation',
  templateUrl: './rotating-navigation.component.html',
  styleUrls: ['./rotating-navigation.component.scss']
})
export class RotatingNavigationComponent implements OnInit {
  isActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isActive = !this.isActive;
  }
}
