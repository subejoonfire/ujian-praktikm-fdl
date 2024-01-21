import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuruListPage } from './guru-list.page';

describe('GuruListPage', () => {
  let component: GuruListPage;
  let fixture: ComponentFixture<GuruListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuruListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

function async(arg0: () => void): jasmine.ImplementationCallback {
  throw new Error('Function not implemented.');
}
