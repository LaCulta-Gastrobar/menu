import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidaEngComponent } from './bebida-eng.component';

describe('BebidaEngComponent', () => {
  let component: BebidaEngComponent;
  let fixture: ComponentFixture<BebidaEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BebidaEngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BebidaEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
