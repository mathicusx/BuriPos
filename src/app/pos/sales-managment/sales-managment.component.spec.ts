import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesManagmentComponent } from './sales-managment.component';

describe('SalesManagmentComponent', () => {
  let component: SalesManagmentComponent;
  let fixture: ComponentFixture<SalesManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesManagmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
