import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SAmbientesPage } from './s-ambientes.page';

describe('SAmbientesPage', () => {
  let component: SAmbientesPage;
  let fixture: ComponentFixture<SAmbientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SAmbientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
