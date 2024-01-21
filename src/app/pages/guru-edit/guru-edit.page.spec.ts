import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuruEditPage } from './guru-edit.page';

describe('GuruEditPage', () => {
  let component: GuruEditPage;
  let fixture: ComponentFixture<GuruEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuruEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
