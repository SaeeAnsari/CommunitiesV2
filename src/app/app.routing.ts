import {Router, RouterModule} from '@angular/router';
import {CardViewEditComponent} from './card-view-edit/card-view-edit.component';
import {CommunitiesSearchComponent} from './communities-search/communities-search.component';
import {CommunityComponent} from './community/community.component';
import {NewPostComponentComponent} from './new-post-component/new-post-component.component';
import {TileLayoutComponent} from './tile-layout/tile-layout.component';
import {UserSearchComponent} from './user-search/user-search.component';
import {MainPostViewComponent} from './main-post-view/main-post-view.component';
import {MessageItemComponent} from './conversation/message-item/message-item.component';
import {ConversationComponent} from './conversation/conversation.component'; 
import {UserCommunitiesComponent} from './user-communities/user-communities.component';
import {MyCommunitiesComponent} from './my-communities/my-communities.component';
import {LiveFeedComponent} from './live-feed/live-feed.component';



export const routing = RouterModule.forRoot([
    {path: '', component: LiveFeedComponent},
    {path: 'CardViewEdit', component: CardViewEditComponent},
    {path: 'CardViewEdit/:id', component: CardViewEditComponent},    
    {path: 'CommunitiesSearch', component: CommunitiesSearchComponent},
    {path: 'Community/:id', component: CommunityComponent},
    {path: 'Community', component: CommunityComponent},    
    {path: 'NewPost', component: NewPostComponentComponent},
    {path: 'TileMain', component: TileLayoutComponent},
    {path: 'UserSearch', component: UserSearchComponent},
    {path: 'UserSearch/:communityID', component: UserSearchComponent},
    {path: 'Message', component: MessageItemComponent},
    {path: 'Conversation',  component: ConversationComponent },
    {path: 'UserCommunities', component: UserCommunitiesComponent},
    {path: 'MyCommunities', component: MyCommunitiesComponent}
])