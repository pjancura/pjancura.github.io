import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeAccordionComponent } from './resume-accordion.component';

describe('ResumeAccordionComponent', () => {
  let component: ResumeAccordionComponent;
  let fixture: ComponentFixture<ResumeAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResumeAccordionComponent]
    });
    fixture = TestBed.createComponent(ResumeAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
