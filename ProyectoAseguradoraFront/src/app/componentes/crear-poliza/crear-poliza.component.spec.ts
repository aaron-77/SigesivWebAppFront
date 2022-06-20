import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPolizaComponent } from './crear-poliza.component';

describe('CrearPolizaComponent', () => {
  let component: CrearPolizaComponent;
  let fixture: ComponentFixture<CrearPolizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearPolizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPolizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
