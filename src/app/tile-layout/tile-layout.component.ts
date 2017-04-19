import { Component, OnInit } from '@angular/core';
import {MasonryModule} from 'angular2-masonry';
import {UserPost} from '../interfaces/user-post';
import {StoryService} from '../services/story.service';

@Component({
  selector: 'tileLayout',
  templateUrl: './tile-layout.component.html',
  styleUrls: [ '../../css/responsive.css', '../../css/style.css'],
  providers: [StoryService]
})
export class TileLayoutComponent implements OnInit {


constructor(private _postService : StoryService) { }
  private bricks: any;  

  ngOnInit() {
    this.bricks = this._postService.GetStoriesByCommunity(-1,0);

  }
}
