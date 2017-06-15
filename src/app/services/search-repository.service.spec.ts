import { TestBed, inject } from '@angular/core/testing';

import { SearchRepositoryService } from './search-repository.service';

describe('SearchRepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchRepositoryService]
    });
  });

  it('should be created', inject([SearchRepositoryService], (service: SearchRepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
