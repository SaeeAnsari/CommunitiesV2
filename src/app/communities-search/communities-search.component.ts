import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../services/community.service';
import { FormGroup, FormControl, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { Community } from '../interfaces/community';
import { UserService } from '../services/user.service';

@Component({
  selector: 'communitiesSearch',
  templateUrl: './communities-search.component.html',
  styleUrls: ['./communities-search.component.css'],
  providers: [CommunityService, UserService]
})
export class CommunitiesSearchComponent implements OnInit {

  searchVal: string;
  searchItems: Community[] = [];
  searchInput = new FormControl();



  constructor(private _fb: FormBuilder, private _searchService: CommunityService, private _userService: UserService) {
    this.searchVal = "";
  }

  public bindCommunitiesList() {

    this.searchItems = [];

    if (this.searchVal == undefined)
      this.searchVal = '';

    this._userService.getLoggedinInUser().subscribe(s => {
      let userID = s.ID;

      this._searchService.GetAllCommunities(this.searchVal, userID)
        .subscribe(sub => {
          sub.forEach(element => {
            var community = {
              id: element.ID,
              name: element.Name,
              description: element.Description,
              ownerID: element.OwnerID,
              ownerName: element.OwnerName,
              typeID: 1,
              typeName: 'City',
              imageURL: element.ImageURL,
              lastUpdate: null,
              isMember: element.isMember
            };

            this.searchItems.push(community);
          });
        });
    });
  }

  searchCommunities() {

    this.bindCommunitiesList();
  }

  ngOnInit() {
    this.searchInput.valueChanges
      .debounceTime(1000)
      .distinctUntilChanged()
      .subscribe(va => {
        this.bindCommunitiesList();
      });

  }

  userJoinedCommunity() {
    this.bindCommunitiesList();
  }
}
