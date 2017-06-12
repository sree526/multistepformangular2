import { TestBed, inject } from '@angular/core/testing';

import { ActiveclassService } from './activeclass.service';

describe('ActiveclassService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiveclassService]
    });
  });

  it('should ...', inject([ActiveclassService], (service: ActiveclassService) => {
    expect(service).toBeTruthy();
  }));
});
