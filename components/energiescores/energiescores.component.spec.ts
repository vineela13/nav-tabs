import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergiescoresComponent } from './energiescores.component';

describe('EnergiescoresComponent', () => {
  let component: EnergiescoresComponent;
  let fixture: ComponentFixture<EnergiescoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergiescoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergiescoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
