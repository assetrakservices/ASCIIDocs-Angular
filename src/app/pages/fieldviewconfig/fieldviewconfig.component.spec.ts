import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldviewconfigComponent } from './fieldviewconfig.component';

describe('FieldviewconfigComponent', () => {
  let component: FieldviewconfigComponent;
  let fixture: ComponentFixture<FieldviewconfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldviewconfigComponent]
    });
    fixture = TestBed.createComponent(FieldviewconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
