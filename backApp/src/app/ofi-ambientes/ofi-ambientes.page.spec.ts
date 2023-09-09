import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OfiAmbientesPage } from './ofi-ambientes.page';

describe('OfiAmbientesPage', () => {
  let component: OfiAmbientesPage;
  let fixture: ComponentFixture<OfiAmbientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OfiAmbientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
