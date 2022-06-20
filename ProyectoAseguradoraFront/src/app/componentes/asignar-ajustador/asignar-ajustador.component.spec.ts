import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarAjustadorComponent } from './asignar-ajustador.component';

describe('AsignarAjustadorComponent', () => {
  let component: AsignarAjustadorComponent;
  let fixture: ComponentFixture<AsignarAjustadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarAjustadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarAjustadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
