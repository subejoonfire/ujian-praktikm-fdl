import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuruDetailPage } from './guru-detail.page';

describe('GuruDetailPage', () => {
  let component: GuruDetailPage;
  let fixture: ComponentFixture<GuruDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuruDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
