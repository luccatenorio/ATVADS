import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaliaaComponent } from './taliaa.component';

describe('TaliaaComponent', () => {
  let component: TaliaaComponent;
  let fixture: ComponentFixture<TaliaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaliaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaliaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
