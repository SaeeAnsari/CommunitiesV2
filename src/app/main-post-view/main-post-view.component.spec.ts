/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainPostViewComponent } from './main-post-view.component';

describe('MainPostViewComponent', () => {
  let component: MainPostViewComponent;
  let fixture: ComponentFixture<MainPostViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
