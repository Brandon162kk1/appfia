import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IAmbientesPage } from './i-ambientes.page';

describe('IAmbientesPage', () => {
  let component: IAmbientesPage;
  let fixture: ComponentFixture<IAmbientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(IAmbientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
