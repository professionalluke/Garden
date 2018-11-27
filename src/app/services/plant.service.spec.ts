import { TestBed } from '@angular/core/testing';

import { PlantService } from './plant.service';

describe('PlantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlantService = TestBed.get(PlantService);
    expect(service).toBeTruthy();
  });
});
