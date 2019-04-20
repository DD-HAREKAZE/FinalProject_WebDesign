import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumbusComponent } from './columbus.component';

describe('ColumbusComponent', () => {
  let component: ColumbusComponent;
  let fixture: ComponentFixture<ColumbusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumbusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
