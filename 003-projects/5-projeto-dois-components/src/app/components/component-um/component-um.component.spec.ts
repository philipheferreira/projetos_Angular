import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentUmComponent } from './component-um.component';

describe('ComponentUmComponent', () => {
  let component: ComponentUmComponent;
  let fixture: ComponentFixture<ComponentUmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentUmComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentUmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
