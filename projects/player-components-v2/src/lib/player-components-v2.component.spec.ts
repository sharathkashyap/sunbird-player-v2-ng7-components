import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerComponentsV2Component } from './player-components-v2.component';

describe('PlayerComponentsV2Component', () => {
  let component: PlayerComponentsV2Component;
  let fixture: ComponentFixture<PlayerComponentsV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerComponentsV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerComponentsV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
