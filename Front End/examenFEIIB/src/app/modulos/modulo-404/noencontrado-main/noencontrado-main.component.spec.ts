import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoencontradoMainComponent } from './noencontrado-main.component';

describe('NoencontradoMainComponent', () => {
  let component: NoencontradoMainComponent;
  let fixture: ComponentFixture<NoencontradoMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoencontradoMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoencontradoMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
