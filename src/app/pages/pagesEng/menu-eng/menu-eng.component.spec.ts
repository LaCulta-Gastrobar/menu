import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEngComponent } from './menu-eng.component';

describe('MenuEngComponent', () => {
  let component: MenuEngComponent;
  let fixture: ComponentFixture<MenuEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuEngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
