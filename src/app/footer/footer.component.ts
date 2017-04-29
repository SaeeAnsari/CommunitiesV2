import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [UserService]
})
export class FooterComponent implements OnInit {

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
  }

  SetMainCityFeed() {
    this._userService.getLoggedinInUser().subscribe(s => {
      let defaultCommunityID = s.DefaultCommunityID;
      this._router.navigate(['/Feed', defaultCommunityID]);
    });
  }

  SetCommunitySearch() {
    this._router.navigate(['/CommunitiesSearch']);
  }
}
