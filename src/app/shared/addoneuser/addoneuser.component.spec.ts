import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddoneuserComponent } from './addoneuser.component';

describe('AddoneuserComponent', () => {
  let component: AddoneuserComponent;
  let fixture: ComponentFixture<AddoneuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddoneuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddoneuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
