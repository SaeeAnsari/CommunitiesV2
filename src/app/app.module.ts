import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NewPostComponentComponent } from './new-post-component/new-post-component.component';
import { TopTextComponentComponent } from './top-text-component/top-text-component.component';
import { TileLayoutComponent } from './tile-layout/tile-layout.component';
import { MasonryModule } from 'angular2-masonry';
import { NavigationComponent } from './navigation/navigation.component';
import { ActionListComponent } from './action-list/action-list.component';
import { CardNoImageComponent } from './tile-layout/card-no-image/card-no-image.component';
import { CardImageComponent } from './tile-layout/card-image/card-image.component';
import { CardActionComponent } from './tile-layout/card-action/card-action.component';
import { CardViewEditComponent } from './card-view-edit/card-view-edit.component';
import { PostOwnerDetailsComponent } from './card-view-edit/post-owner-details/post-owner-details.component';
import { PostCommentsViewComponent } from './card-view-edit/post-comments-view/post-comments-view.component';
import { PostCommentActionViewComponent } from './card-view-edit/post-comment-action-view/post-comment-action-view.component';
import { PostAddCommentComponent } from './card-view-edit/post-add-comment/post-add-comment.component';
import { CommunitiesSearchComponent } from './communities-search/communities-search.component';
import { SearchItemComponent } from './communities-search/search-item/search-item.component';
import { UserSearchComponent } from './user-search/user-search.component';
import {UserSearchItemComponent} from './user-search/user-search-item/user-search-item.component';

import {UserSearchService} from './user-search/user-search.service';
import { CommunityComponent } from './community/community.component';
import {routing} from './app.routing';
import { MainPostViewComponent } from './main-post-view/main-post-view.component';
import { ConversationComponent } from './conversation/conversation.component';
import { MessageItemComponent } from './conversation/message-item/message-item.component';
import { UserCommunitiesComponent } from './user-communities/user-communities.component';
import { MyCommunitiesComponent } from './my-communities/my-communities.component';
import { LiveFeedComponent } from './live-feed/live-feed.component';
import { UserTagComponent } from './Live-Feed/user-tag/user-tag.component';
import { UserPostComponent } from './Live-Feed/user-post/user-post.component';
import { UserPostActionComponent } from './Live-Feed/user-post-action/user-post-action.component';
import { UserCommentsComponent } from './Live-Feed/user-comments/user-comments.component';

import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    NewPostComponentComponent,
    TopTextComponentComponent,
    TileLayoutComponent,
    NavigationComponent,
    ActionListComponent,
    CardNoImageComponent,
    CardImageComponent,
    CardActionComponent,
    CardViewEditComponent,
    PostOwnerDetailsComponent,
    PostCommentsViewComponent,
    PostCommentActionViewComponent,
    PostAddCommentComponent,
    CommunitiesSearchComponent,
    SearchItemComponent,
    UserSearchComponent,
    UserSearchItemComponent,
    CommunityComponent,
    MainPostViewComponent,
    ConversationComponent,
    MessageItemComponent,
    UserCommunitiesComponent,
    MyCommunitiesComponent,
    LiveFeedComponent,
    UserTagComponent,
    UserPostComponent,
    UserPostActionComponent,
    UserCommentsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    MasonryModule,
    routing,
    NgbModule.forRoot()
  ],
  entryComponents: [UserCommentsComponent],
  providers: [ UserSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
