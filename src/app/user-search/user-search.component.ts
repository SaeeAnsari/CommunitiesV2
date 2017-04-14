import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';



@Component({
  selector: 'UserSearch',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [UserService]
})
export class UserSearchComponent implements OnInit {

  private communityID: number;
  private subscription;
  private userItems: User[] = [];
  searchVal: string;

  constructor(private userService: UserService, private _route: ActivatedRoute) {
    this.bindUserGrid();
    this.searchVal = "";
    this.subscription = this._route.params.subscribe(params => {
      this.communityID = +params["communityID"];
    });
  }


  bindUserGrid() {

    this.userItems = [];

    if (this.searchVal == undefined)
      this.searchVal = '';


    this.userService.GetAllActiveUsers(this.searchVal)
      .subscribe(list => {

        list.forEach(element => {

          var user = {
            id: element.ID,
            firstName: element.FirstName,
            lastName: element.LastName,
            active: element.Active,
            authenticationPortalID: element.AuthenticationPortalID
          };

          this.userItems.push(user);
        });

      });

  }

  ngOnInit() {

  }

}
