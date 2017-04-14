import { Component, OnInit } from '@angular/core';
import {MasonryModule} from 'angular2-masonry';
import {UserPost} from '../interfaces/user-post';
import {UserPostService} from '../services/user-post.service';

@Component({
  selector: 'tileLayout',
  templateUrl: './tile-layout.component.html',
  styleUrls: [ '../../css/responsive.css', '../../css/style.css'],
  providers: [UserPostService]
})
export class TileLayoutComponent implements OnInit {


constructor(private _postService : UserPostService) { }
  private bricks: any;  

  ngOnInit() {
    this.bricks = this._postService.getPost();

  }
}
