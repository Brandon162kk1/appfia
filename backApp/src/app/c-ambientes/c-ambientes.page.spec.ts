import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CAmbientesPage } from './c-ambientes.page';

describe('CAmbientesPage', () => {
  let component: CAmbientesPage;
  let fixture: ComponentFixture<CAmbientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CAmbientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
