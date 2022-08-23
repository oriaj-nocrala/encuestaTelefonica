import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlamadasComponent } from './llamadas.component';

describe('LlamadasComponent', () => {
  let component: LlamadasComponent;
  let fixture: ComponentFixture<LlamadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlamadasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LlamadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
