import { TestBed } from '@angular/core/testing';

import { PlayerComponentsV2Service } from './player-components-v2.service';

describe('PlayerComponentsV2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerComponentsV2Service = TestBed.get(PlayerComponentsV2Service);
    expect(service).toBeTruthy();
  });
});
