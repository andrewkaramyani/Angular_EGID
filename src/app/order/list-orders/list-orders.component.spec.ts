import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListordersComponent } from './list-orders.component';

describe('ListordersComponent', () => {
  let component: ListordersComponent;
  let fixture: ComponentFixture<ListordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
