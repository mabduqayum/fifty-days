import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandingCardsComponent } from './expanding-cards.component';

describe('ExpandingCardsComponent', () => {
  let component: ExpandingCardsComponent;
  let fixture: ComponentFixture<ExpandingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpandingCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
