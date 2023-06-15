import { TestBed } from '@angular/core/testing';

import { HomePageSerService } from './home-page-ser.service';

describe('HomePageSerService', () => {
  let service: HomePageSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomePageSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
