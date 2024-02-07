import { TestBed } from '@angular/core/testing';

import { RetornaObservableService } from './retorna-observable.service';

describe('RetornaObservableService', () => {
  let service: RetornaObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetornaObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
