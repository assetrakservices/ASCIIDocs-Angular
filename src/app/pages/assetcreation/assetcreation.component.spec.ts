import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetcreationComponent } from './assetcreation.component';

describe('AssetcreationComponent', () => {
  let component: AssetcreationComponent;
  let fixture: ComponentFixture<AssetcreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetcreationComponent]
    });
    fixture = TestBed.createComponent(AssetcreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
