import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewViewCompComponent } from './new-view-comp.component';

describe('NewViewCompComponent', () => {
  let component: NewViewCompComponent;
  let fixture: ComponentFixture<NewViewCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewViewCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewViewCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
