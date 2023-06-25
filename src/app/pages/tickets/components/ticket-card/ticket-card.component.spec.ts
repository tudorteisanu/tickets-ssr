import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketCardComponent } from './ticket-card.component';

describe('TicketCardComponent', () => {
  let component: TicketCardComponent;
  let fixture: ComponentFixture<TicketCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TicketCardComponent]
    });
    fixture = TestBed.createComponent(TicketCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
