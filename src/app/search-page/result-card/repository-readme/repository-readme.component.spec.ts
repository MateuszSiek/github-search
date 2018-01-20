import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositoryReadmeComponent } from './repository-readme.component';

describe('RepositoryReadmeComponent', () => {
  let component: RepositoryReadmeComponent;
  let fixture: ComponentFixture<RepositoryReadmeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositoryReadmeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositoryReadmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
