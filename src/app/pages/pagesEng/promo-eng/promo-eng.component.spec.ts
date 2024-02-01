import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromoEngComponent } from './promo-eng.component';

describe('PromoEngComponent', () => {
  let component: PromoEngComponent;
  let fixture: ComponentFixture<PromoEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromoEngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PromoEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
