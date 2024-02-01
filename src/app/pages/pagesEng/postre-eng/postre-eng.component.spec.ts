import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostreEngComponent } from './postre-eng.component';

describe('PostreEngComponent', () => {
  let component: PostreEngComponent;
  let fixture: ComponentFixture<PostreEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostreEngComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostreEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
