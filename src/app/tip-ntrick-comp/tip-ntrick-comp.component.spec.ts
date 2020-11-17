import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipNtrickCompComponent } from './tip-ntrick-comp.component';

describe('TipNtrickCompComponent', () => {
  let component: TipNtrickCompComponent;
  let fixture: ComponentFixture<TipNtrickCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipNtrickCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipNtrickCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
