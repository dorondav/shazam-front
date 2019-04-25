import { TestBed } from '@angular/core/testing';

import { GetSongsService } from './get-songs.service';

describe('GetSongsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSongsService = TestBed.get(GetSongsService);
    expect(service).toBeTruthy();
  });
});
