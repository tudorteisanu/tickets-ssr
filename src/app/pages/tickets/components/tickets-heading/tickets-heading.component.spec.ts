import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsHeadingComponent } from './tickets-heading.component';

describe('TicketsHeadingComponent', () => {
  let component: TicketsHeadingComponent;
  let fixture: ComponentFixture<TicketsHeadingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketsHeadingComponent]
    });
    fixture = TestBed.createComponent(TicketsHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
