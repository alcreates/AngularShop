import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsDisplayComponent } from './order-details-display.component';

describe('OrderDetailsDisplayComponent', () => {
  let component: OrderDetailsDisplayComponent;
  let fixture: ComponentFixture<OrderDetailsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderDetailsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
