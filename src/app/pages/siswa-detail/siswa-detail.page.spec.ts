import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiswaDetailPage } from './siswa-detail.page';

describe('SiswaDetailPage', () => {
  let component: SiswaDetailPage;
  let fixture: ComponentFixture<SiswaDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SiswaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
