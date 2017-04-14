import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cardAction',
  templateUrl: './card-action.component.html',
  styleUrls: ['./card-action.component.css']
})
export class CardActionComponent implements OnInit {

  @Input() cardLikeCount;
  @Input() cardDislikeCount;
  @Input() cardCommentCount;
  @Input() cardTotalViews;
  @Input() minimizeView: false;
  constructor() { }

  ngOnInit() {
  }

}
