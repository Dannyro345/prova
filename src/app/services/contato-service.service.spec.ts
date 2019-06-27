import { TestBed } from '@angular/core/testing';

import { ContatoServiceService } from './contato-service.service';

describe('ContatoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContatoServiceService = TestBed.get(ContatoServiceService);
    expect(service).toBeTruthy();
  });
});
