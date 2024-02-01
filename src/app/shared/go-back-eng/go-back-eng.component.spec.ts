import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoBackEngComponent } from './go-back-eng.component';

describe('GoBackEngComponent', () => {
  let component: GoBackEngComponent;
  let fixture: ComponentFixture<GoBackEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoBackEngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GoBackEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
