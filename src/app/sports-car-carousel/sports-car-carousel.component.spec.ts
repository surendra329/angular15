import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsCarCarouselComponent } from './sports-car-carousel.component';

describe('SportsCarCarouselComponent', () => {
  let component: SportsCarCarouselComponent;
  let fixture: ComponentFixture<SportsCarCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SportsCarCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportsCarCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
