import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardatmComponent } from './dashboardatm.component';

describe('DashboardatmComponent', () => {
  let component: DashboardatmComponent;
  let fixture: ComponentFixture<DashboardatmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardatmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardatmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
