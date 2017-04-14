import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cardImage',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css']
})
export class CardImageComponent implements OnInit {

  @Input() cardTitle;
  @Input() cardText;
  @Input() cardImage;
  @Input() cardLikeCount;
  @Input() cardDislikeCount;
  @Input() cardCommentCount;
  @Input() cardTotalViews;

  constructor() { }

  ngOnInit() {
  }

}
