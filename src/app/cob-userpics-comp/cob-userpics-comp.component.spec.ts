import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobUserpicsCompComponent } from './cob-userpics-comp.component';

describe('CobUserpicsCompComponent', () => {
  let component: CobUserpicsCompComponent;
  let fixture: ComponentFixture<CobUserpicsCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobUserpicsCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobUserpicsCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
