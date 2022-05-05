import { TestBed } from '@angular/core/testing';

import { InfoItemService } from './info-item.service';

describe('InfoItemService', () => {
  let service: InfoItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
