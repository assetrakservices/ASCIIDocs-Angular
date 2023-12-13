import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditassetsComponent } from './editassets.component';

describe('EditassetsComponent', () => {
  let component: EditassetsComponent;
  let fixture: ComponentFixture<EditassetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditassetsComponent]
    });
    fixture = TestBed.createComponent(EditassetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
