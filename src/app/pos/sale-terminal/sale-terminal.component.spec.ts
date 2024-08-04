import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleTerminalComponent } from './sale-terminal.component';

describe('SaleTerminalComponent', () => {
  let component: SaleTerminalComponent;
  let fixture: ComponentFixture<SaleTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaleTerminalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
