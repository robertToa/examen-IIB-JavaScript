import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolRestServiceComponent } from './rol-rest-service.component';

describe('RolRestServiceComponent', () => {
  let component: RolRestServiceComponent;
  let fixture: ComponentFixture<RolRestServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolRestServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolRestServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
