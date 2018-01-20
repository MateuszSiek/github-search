import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitStatsComponent } from './commit-stats.component';

describe('CommitStatsComponent', () => {
  let component: CommitStatsComponent;
  let fixture: ComponentFixture<CommitStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommitStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
