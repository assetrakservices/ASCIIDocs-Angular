import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldglossaryComponent } from './fieldglossary.component';

describe('FieldglossaryComponent', () => {
  let component: FieldglossaryComponent;
  let fixture: ComponentFixture<FieldglossaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FieldglossaryComponent]
    });
    fixture = TestBed.createComponent(FieldglossaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
