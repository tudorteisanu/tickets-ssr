import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsSearchComponent } from './tickets-search.component';

describe('TicketsSearchComponent', () => {
  let component: TicketsSearchComponent;
  let fixture: ComponentFixture<TicketsSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketsSearchComponent]
    });
    fixture = TestBed.createComponent(TicketsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
