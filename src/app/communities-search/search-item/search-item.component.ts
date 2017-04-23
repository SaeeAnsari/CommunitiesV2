import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { UserService } from '../../services/user.service';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.css'],
  providers: [UserService]
})
export class SearchItemComponent implements OnInit {
  @Input() HeaderText = "";
  @Input() BodyText = "";
  @Input() ID;
  @Input() Member;
  @Input() ImageURL;

  @Output() CommunityChanged = new EventEmitter();

  private buttonText: string;

  private existingUser: boolean = false;


  constructor(private _userService: UserService, private _modalService: NgbModal, private route: ActivatedRoute,
                private router: Router) { }

  ngOnInit() {

    if(this.ImageURL == undefined || this.ImageURL == ""){
      this.ImageURL = "https://cdn2.iconfinder.com/data/icons/flat-ui-free/128/Chat.png";
    }

    if (this.Member == "true") {
      this.buttonText = "View"
    }
    else {
      this.buttonText = "Join";
    }
  }

  joinCommunity() {
    this._userService.getLoggedinInUser().subscribe(sub => {

      let userID: number = sub.ID;

      this._userService.AddUsertoCommunity(userID, this.ID).subscribe(sub => {
        this.existingUser = true;
        this.CommunityChanged.emit();
      });
    });
  }

  addUserToCommunity(contentPanel){
     this._modalService.open(contentPanel).result.then((result) => {
        if (`${result}` == "Yes") {
          this.joinCommunity();
        }
      });
  }

  leaveCommunity(){
    this._userService.getLoggedinInUser().subscribe(sub => {

      let userID: number = sub.ID;

      this._userService.RemoveUserFromCommunity(userID, this.ID).subscribe(sub => {
        this.existingUser = true;
        this.CommunityChanged.emit();
      });
    });
  }

  removeUserFromCommunity(contentPanel){
    this._modalService.open(contentPanel).result.then((result) => {
        if (`${result}` == "Yes") {
          this.leaveCommunity();
        }
      });
  }

  navigate() {
    if (this.Member == "true") {
      let link = ['/Feed/' + this.ID];
      this.router.navigate(link);
    }
   
  }
}
