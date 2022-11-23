import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnderdelenComponent } from './onderdelen.component';

describe('OnderdelenComponent', () => {
  let component: OnderdelenComponent;
  let fixture: ComponentFixture<OnderdelenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnderdelenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnderdelenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
