import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaliadinizComponent } from './taliadiniz.component';

describe('TaliadinizComponent', () => {
  let component: TaliadinizComponent;
  let fixture: ComponentFixture<TaliadinizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaliadinizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaliadinizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
