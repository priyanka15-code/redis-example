import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteScrollComponent } from './infinite-scroll.component';

describe('InfiniteScrollComponent', () => {
  let component: InfiniteScrollComponent;
  let fixture: ComponentFixture<InfiniteScrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfiniteScrollComponent]
    });
    fixture = TestBed.createComponent(InfiniteScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
