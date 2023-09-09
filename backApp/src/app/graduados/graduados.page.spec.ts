import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GraduadosPage } from './graduados.page';

describe('GraduadosPage', () => {
  let component: GraduadosPage;
  let fixture: ComponentFixture<GraduadosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GraduadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
