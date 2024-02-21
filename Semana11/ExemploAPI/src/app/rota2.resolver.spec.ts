import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { rota2Resolver } from './rota2.resolver';

describe('rota2Resolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => rota2Resolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
