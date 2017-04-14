import { Component, OnInit } from '@angular/core';
import { Community } from '../interfaces/community';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { CommunityService } from '../services/community.service';

@Component({
  selector: 'app-user-communities',
  templateUrl: './user-communities.component.html',
  styleUrls: ['./user-communities.component.css'],
  providers: [UserService, CommunityService]
})
export class UserCommunitiesComponent implements OnInit {

  constructor(private _userServive: UserService, private _communityService: CommunityService) { }

  private userCommunities: Community[] = [];

  loadUserCommunities() {
    this._communityService.GetUserCommunities(1).subscribe(sub => {

      sub.forEach(element => {
        let com: Community = {
          id: element.ID,
          name: element.Name,
          description: element.Description,
          ownerID: element.OwnerID,
          ownerName: element.OwnerName,
          typeID: 1,
          typeName: 'City',
          imageURL: element.ImageURL,
          lastUpdate: null
        }
        this.userCommunities.push(com);
      });
    });
  }

  ngOnInit() {
    this.loadUserCommunities();
  }

}
