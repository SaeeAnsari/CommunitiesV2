/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserPostActionComponent } from './user-post-action.component';

describe('UserPostActionComponent', () => {
  let component: UserPostActionComponent;
  let fixture: ComponentFixture<UserPostActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPostActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPostActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
