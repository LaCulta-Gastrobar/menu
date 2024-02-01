import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoEngComponent } from './juego-eng.component';

describe('JuegoEngComponent', () => {
  let component: JuegoEngComponent;
  let fixture: ComponentFixture<JuegoEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegoEngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JuegoEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
