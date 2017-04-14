/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CommunitiesSearchService } from './communities-search.service';

describe('CommunitiesSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommunitiesSearchService]
    });
  });

  it('should ...', inject([CommunitiesSearchService], (service: CommunitiesSearchService) => {
    expect(service).toBeTruthy();
  }));
});
