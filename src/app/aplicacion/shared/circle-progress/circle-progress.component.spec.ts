import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleProgressComponent } from './circle-progress.component';

describe('CircleProgressComponent', () => {
  let component: CircleProgressComponent;
  let fixture: ComponentFixture<CircleProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircleProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CircleProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
