import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArAmbientesPage } from './ar-ambientes.page';

describe('ArAmbientesPage', () => {
  let component: ArAmbientesPage;
  let fixture: ComponentFixture<ArAmbientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ArAmbientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
