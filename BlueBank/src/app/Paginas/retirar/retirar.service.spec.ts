import { TestBed } from '@angular/core/testing';

import { RetirarService } from './retirar.service';

describe('RetirarService', () => {
  let service: RetirarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetirarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
