import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
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
  @Input() AlreadyMember = "";
  @Output() UserAction = new EventEmitter();

  private communityID: number;
  private subscription;

  private selected: boolean = false;


  constructor(private _userService: UserService, private _route: ActivatedRoute) {

    this.subscription = this._route.params.subscribe(params => {
      this.communityID = +params["communityID"];
    });

  }

  ngOnInit() {

    console.log(Image);
  }

  public displayCheckmark() {
    if (this.selected)
      return 'glyphicon glyphicon-ok';
    else return '';
  }

  public userSelected() {
    this.selected = !this.selected;

    this._userService.AddUsertoCommunity(this.ID, this.communityID);

  }


  addUserToCommunity(){

    if(this.communityID > 0){
       this._userService.getLoggedinInUser().subscribe(sub => {

      let userID: number = sub.ID;

      this._userService.AddUsertoCommunity(this.ID, this.communityID).subscribe(sub => {        
        this.UserAction.emit();
      });
    });
    }

  }

  removeUserFromCommunity(){
    if(this.communityID > 0){
       this._userService.getLoggedinInUser().subscribe(sub => {

      let userID: number = sub.ID;

      this._userService.RemoveUserFromCommunity(this.ID, this.communityID).subscribe(sub => {        
        this.UserAction.emit();
      });
    });
    }
  }

  navigate(){

  }
}
