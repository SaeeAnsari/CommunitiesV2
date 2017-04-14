import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cardNoImage',
  templateUrl: './card-no-image.component.html',
  styleUrls: ['./card-no-image.component.css']
})
export class CardNoImageComponent implements OnInit {

  @Input() cardTitle;
  @Input() cardText;
  @Input() cardLikeCount;
  @Input() cardDislikeCount;
  @Input() cardCommentCount;
  @Input() cardTotalViews;

  constructor() { }

  ngOnInit() {
  }

}
