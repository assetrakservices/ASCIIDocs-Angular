import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetstagesComponent } from './assetstages.component';

describe('AssetstagesComponent', () => {
  let component: AssetstagesComponent;
  let fixture: ComponentFixture<AssetstagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetstagesComponent]
    });
    fixture = TestBed.createComponent(AssetstagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
