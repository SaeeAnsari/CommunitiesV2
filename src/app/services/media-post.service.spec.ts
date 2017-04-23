import { TestBed, inject } from '@angular/core/testing';

import { MediaPostService } from './media-post.service';

describe('MediaPostService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MediaPostService]
    });
  });

  it('should ...', inject([MediaPostService], (service: MediaPostService) => {
    expect(service).toBeTruthy();
  }));
});
