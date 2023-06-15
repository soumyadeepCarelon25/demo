import { TestBed } from '@angular/core/testing';

import { ContactUsServService } from './contact-us-serv.service';

describe('ContactUsServService', () => {
  let service: ContactUsServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactUsServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
