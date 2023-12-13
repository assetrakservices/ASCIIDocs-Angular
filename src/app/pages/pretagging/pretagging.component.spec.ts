import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretaggingComponent } from './pretagging.component';

describe('PretaggingComponent', () => {
  let component: PretaggingComponent;
  let fixture: ComponentFixture<PretaggingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PretaggingComponent]
    });
    fixture = TestBed.createComponent(PretaggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
