import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortFieldsComponent } from './sort-fields.component';

describe('SortFieldsComponent', () => {
  let component: SortFieldsComponent;
  let fixture: ComponentFixture<SortFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
