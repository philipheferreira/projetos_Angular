import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDoisComponent } from './component-dois.component';

describe('ComponentDoisComponent', () => {
  let component: ComponentDoisComponent;
  let fixture: ComponentFixture<ComponentDoisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentDoisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
