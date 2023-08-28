import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardcompComponent } from './dashboardcomp.component';

describe('DashboardcompComponent', () => {
  let component: DashboardcompComponent;
  let fixture: ComponentFixture<DashboardcompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardcompComponent]
    });
    fixture = TestBed.createComponent(DashboardcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
