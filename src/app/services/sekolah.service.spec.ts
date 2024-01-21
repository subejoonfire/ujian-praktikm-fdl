import { TestBed } from '@angular/core/testing';

import { SekolahService } from './sekolah.service';

describe('SekolahService', () => {
  let service: SekolahService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SekolahService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
