import { ComponentFixture, TestBed } from '@angular/core/testing';

import { todoComponent } from './todo.component';

describe('TodoComponent', () => {
  let component: todoComponent;
  let fixture: ComponentFixture<todoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [todoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(todoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
