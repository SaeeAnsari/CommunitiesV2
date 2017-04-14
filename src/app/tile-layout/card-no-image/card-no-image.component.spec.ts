/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CardNoImageComponent } from './card-no-image.component';

describe('CardNoImageComponent', () => {
  let component: CardNoImageComponent;
  let fixture: ComponentFixture<CardNoImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardNoImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardNoImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
