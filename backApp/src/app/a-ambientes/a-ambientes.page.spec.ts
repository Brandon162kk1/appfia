import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AAmbientesPage } from './a-ambientes.page';

describe('AAmbientesPage', () => {
  let component: AAmbientesPage;
  let fixture: ComponentFixture<AAmbientesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AAmbientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
