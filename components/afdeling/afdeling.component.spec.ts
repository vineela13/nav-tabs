import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfdelingComponent } from './afdeling.component';

describe('AfdelingComponent', () => {
  let component: AfdelingComponent;
  let fixture: ComponentFixture<AfdelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfdelingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AfdelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
