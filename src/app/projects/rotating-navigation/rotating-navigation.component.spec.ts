import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotatingNavigationComponent } from './rotating-navigation.component';

describe('RotatingNavigationComponent', () => {
  let component: RotatingNavigationComponent;
  let fixture: ComponentFixture<RotatingNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RotatingNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RotatingNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
