import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcProfileComponent } from './dc-profile.component';

describe('DcProfileComponent', () => {
  let component: DcProfileComponent;
  let fixture: ComponentFixture<DcProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DcProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DcProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
