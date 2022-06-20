import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearReporteMapComponent } from './crear-reporte-map.component';

describe('CrearReporteMapComponent', () => {
  let component: CrearReporteMapComponent;
  let fixture: ComponentFixture<CrearReporteMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearReporteMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearReporteMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
