import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryclassComponent } from './categoryclass.component';

describe('CategoryclassComponent', () => {
  let component: CategoryclassComponent;
  let fixture: ComponentFixture<CategoryclassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryclassComponent]
    });
    fixture = TestBed.createComponent(CategoryclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
