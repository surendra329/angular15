import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallgameComponent } from './ballgame.component';

describe('BallgameComponent', () => {
  let component: BallgameComponent;
  let fixture: ComponentFixture<BallgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallgameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BallgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
