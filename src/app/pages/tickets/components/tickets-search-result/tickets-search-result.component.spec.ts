import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsSearchResultComponent } from './tickets-search-result.component';

describe('TicketsSearchResultComponent', () => {
  let component: TicketsSearchResultComponent;
  let fixture: ComponentFixture<TicketsSearchResultComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketsSearchResultComponent]
    });
    fixture = TestBed.createComponent(TicketsSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
