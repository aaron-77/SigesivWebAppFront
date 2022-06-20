import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPolizasComponent } from './listado-polizas.component';

describe('ListadoPolizasComponent', () => {
  let component: ListadoPolizasComponent;
  let fixture: ComponentFixture<ListadoPolizasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPolizasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPolizasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
