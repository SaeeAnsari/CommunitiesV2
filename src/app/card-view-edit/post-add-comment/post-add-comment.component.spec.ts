/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PostAddCommentComponent } from './post-add-comment.component';

describe('PostAddCommentComponent', () => {
  let component: PostAddCommentComponent;
  let fixture: ComponentFixture<PostAddCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAddCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAddCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
