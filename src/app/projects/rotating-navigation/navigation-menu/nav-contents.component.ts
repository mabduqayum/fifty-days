import {Component, ElementRef, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-nav-contents',
  templateUrl: './nav-contents.component.html',
  styleUrls: ['./nav-contents.component.scss']
})
export class NavContentsComponent implements OnInit, OnDestroy {
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
    document.body.style.backgroundColor = this.isActive ? '#333' : '';
  }

  ngOnDestroy(): void {
    document.body.style.backgroundColor = '';
  }
}
