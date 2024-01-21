import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuruAddPage } from './guru-add.page';

describe('GuruAddPage', () => {
  let component: GuruAddPage;
  let fixture: ComponentFixture<GuruAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuruAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
