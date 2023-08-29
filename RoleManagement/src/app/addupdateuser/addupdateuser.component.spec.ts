import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddupdateuserComponent } from './addupdateuser.component';

describe('AddupdateuserComponent', () => {
  let component: AddupdateuserComponent;
  let fixture: ComponentFixture<AddupdateuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddupdateuserComponent]
    });
    fixture = TestBed.createComponent(AddupdateuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
