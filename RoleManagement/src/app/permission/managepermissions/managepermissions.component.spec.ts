import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagepermissionsComponent } from './managepermissions.component';

describe('ManagepermissionsComponent', () => {
  let component: ManagepermissionsComponent;
  let fixture: ComponentFixture<ManagepermissionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagepermissionsComponent]
    });
    fixture = TestBed.createComponent(ManagepermissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
