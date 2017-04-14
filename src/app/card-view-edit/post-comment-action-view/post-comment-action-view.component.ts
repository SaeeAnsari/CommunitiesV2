import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'postcommentactionview',
  templateUrl: './post-comment-action-view.component.html',
  styleUrls: ['./post-comment-action-view.component.css']
})
export class PostCommentActionViewComponent implements OnInit {
  @Input() commentLikeCount;
  @Input() commentDate;

  constructor() { }

  ngOnInit() {
  }

}
