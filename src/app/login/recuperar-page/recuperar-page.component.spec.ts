import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperarPageComponent } from './recuperar-page.component';

describe('RecuperarPageComponent', () => {
  let component: RecuperarPageComponent;
  let fixture: ComponentFixture<RecuperarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecuperarPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecuperarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
