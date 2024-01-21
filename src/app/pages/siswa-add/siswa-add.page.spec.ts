import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiswaAddPage } from './siswa-add.page';

describe('SiswaAddPage', () => {
  let component: SiswaAddPage;
  let fixture: ComponentFixture<SiswaAddPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SiswaAddPage);
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
