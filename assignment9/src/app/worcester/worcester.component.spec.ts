import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorcesterComponent } from './worcester.component';

describe('WorcesterComponent', () => {
  let component: WorcesterComponent;
  let fixture: ComponentFixture<WorcesterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorcesterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorcesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
