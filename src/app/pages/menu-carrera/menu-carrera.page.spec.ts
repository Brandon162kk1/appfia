import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuCarreraPage } from './menu-carrera.page';

describe('MenuCarreraPage', () => {
  let component: MenuCarreraPage;
  let fixture: ComponentFixture<MenuCarreraPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MenuCarreraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
