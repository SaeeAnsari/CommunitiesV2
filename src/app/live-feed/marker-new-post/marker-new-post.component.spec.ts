import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkerNewPostComponent } from './marker-new-post.component';

describe('MarkerNewPostComponent', () => {
  let component: MarkerNewPostComponent;
  let fixture: ComponentFixture<MarkerNewPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkerNewPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkerNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
