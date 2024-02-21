import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { rota1Resolver } from './rota1.resolver';

describe('rota1Resolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => rota1Resolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
