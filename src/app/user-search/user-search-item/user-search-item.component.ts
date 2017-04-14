import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-search-item',
  templateUrl: './user-search-item.component.html',
  styleUrls: ['./user-search-item.component.css']
})
export class UserSearchItemComponent implements OnInit {

  @Input() ID = 0;
  @Input() Name = "";
  @Input() Image = "";

  private communityID: number;
  private subscription;

  private selected: boolean = false;


  constructor(private _userSerice: UserService, private _route: ActivatedRoute) {

    this.subscription = this._route.params.subscribe(params => {
      this.communityID = +params["communityID"];
    });

  }

  ngOnInit() {
  }

  public displayCheckmark() {
    if (this.selected)
      return 'glyphicon glyphicon-ok';
    else return '';
  }

  public userSelected() {
    this.selected = !this.selected;

    this._userSerice.AddUsertoCommunity(this.ID, this.communityID);

  }
}
