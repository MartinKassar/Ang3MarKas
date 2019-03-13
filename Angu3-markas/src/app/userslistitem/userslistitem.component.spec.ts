import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserslistitemComponent } from './userslistitem.component';

describe('UserslistitemComponent', () => {
  let component: UserslistitemComponent;
  let fixture: ComponentFixture<UserslistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserslistitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserslistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
