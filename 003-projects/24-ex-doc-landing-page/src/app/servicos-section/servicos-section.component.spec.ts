import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosSectionComponent } from './servicos-section.component';

describe('ServicosSectionComponent', () => {
  let component: ServicosSectionComponent;
  let fixture: ComponentFixture<ServicosSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
