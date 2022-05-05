import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-contents',
  templateUrl: './nav-contents.component.html',
  styleUrls: ['./nav-contents.component.scss']
})
export class NavContentsComponent implements OnInit {
  isActive = false;
  private elementRef: ElementRef;


  constructor(elementRef: ElementRef) {
    this.elementRef = elementRef;
  }

  ngOnInit(): void {
  }

  toggleMenu(): void {
    this.isActive = !this.isActive;
    this.elementRef.nativeElement.parentNode.classList.toggle('active');
    if (this.isActive) {
      document.body.style.backgroundColor = '#333'
    }
  }
}
