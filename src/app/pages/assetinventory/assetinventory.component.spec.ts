import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetinventoryComponent } from './assetinventory.component';

describe('AssetinventoryComponent', () => {
  let component: AssetinventoryComponent;
  let fixture: ComponentFixture<AssetinventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssetinventoryComponent]
    });
    fixture = TestBed.createComponent(AssetinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
