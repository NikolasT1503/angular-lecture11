import { TestBed } from '@angular/core/testing';

import { Mod2Service } from './mod2.service';

describe('Mod2Service', () => {
  let service: Mod2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mod2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
