import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiswaEditPage } from './siswa-edit.page';

describe('SiswaEditPage', () => {
  let component: SiswaEditPage;
  let fixture: ComponentFixture<SiswaEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SiswaEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
