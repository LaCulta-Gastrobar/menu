import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CafeEngComponent } from './cafe-eng.component';

describe('CafeEngComponent', () => {
  let component: CafeEngComponent;
  let fixture: ComponentFixture<CafeEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CafeEngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CafeEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
