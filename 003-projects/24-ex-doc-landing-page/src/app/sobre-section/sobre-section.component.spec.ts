import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreSectionComponent } from './sobre-section.component';

describe('SobreSectionComponent', () => {
  let component: SobreSectionComponent;
  let fixture: ComponentFixture<SobreSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SobreSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
