import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiswaListPage } from './siswa-list.page';

describe('SiswaListPage', () => {
  let component: SiswaListPage;
  let fixture: ComponentFixture<SiswaListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SiswaListPage);
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
