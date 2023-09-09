import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AeronauticaPage } from './aeronautica.page';

describe('AeronauticaPage', () => {
  let component: AeronauticaPage;
  let fixture: ComponentFixture<AeronauticaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AeronauticaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
