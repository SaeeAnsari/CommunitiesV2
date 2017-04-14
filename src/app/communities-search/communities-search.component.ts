import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../services/community.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { Community } from '../interfaces/community';

@Component({
  selector: 'communitiesSearch',
  templateUrl: './communities-search.component.html',
  styleUrls: ['./communities-search.component.css'],
  providers: [CommunityService]
})
export class CommunitiesSearchComponent implements OnInit {

  searchVal: string;
  searchItems: Community[] = [];
  


  constructor(private _fb: FormBuilder, private _searchService: CommunityService) {
    this.searchVal = "";
    this.bindCommunitiesList();
  }

  public bindCommunitiesList() {

    this.searchItems= [];

    if (this.searchVal == undefined)
      this.searchVal = '';

    this._searchService.GetAllCommunities(this.searchVal)
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
            lastUpdate: null
          };

          this.searchItems.push(community);
        });
      });
  }

  searchCommunities() {

    this.bindCommunitiesList();
  }

  ngOnInit() {

  }
}
