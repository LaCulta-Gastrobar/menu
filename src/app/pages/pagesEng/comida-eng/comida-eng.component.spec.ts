import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaEngComponent } from './comida-eng.component';

describe('ComidaEngComponent', () => {
  let component: ComidaEngComponent;
  let fixture: ComponentFixture<ComidaEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComidaEngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComidaEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
