import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { IMultiSelectOption, IMultiSelectTexts, IMultiSelectSettings } from 'angular-2-dropdown-multiselect';

import { StoryService } from '../services/story.service';


import { UserService } from '../services/user.service';
import { UserPost } from '../interfaces/user-post';
import { User } from '../interfaces/user';
import { MediaPostService } from '../services/media-post.service';
import { CommunityService } from '../services/community.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'newPost',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.css'],
  providers: [UserService, StoryService, MediaPostService, CommunityService]
})
export class NewPostComponentComponent implements OnInit {


  private user;
  private isUploadingImage: boolean = false;
  private uploaded: boolean = false;
  private postText: string = "";
  private mediaName: string = "";
  private mediaType: string = "";

  private videoSelected: boolean = false;
  private imageSelected: boolean = false;

  private userCommunities = [];

  myOptions: IMultiSelectOption[] = [
    { id: 1, name: 'Option 1' },
    { id: 2, name: 'Option 2' },
  ];

  // Settings configuration
  mySettings: IMultiSelectSettings = {
    enableSearch: true,
    checkedStyle: 'fontawesome',
    buttonClasses: 'btn btn-default btn-block',
    dynamicTitleMaxItems: 3,
    displayAllSelectedText: true
  };

  // Text configuration
  myTexts: IMultiSelectTexts = {
    checkAll: 'Select all',
    uncheckAll: 'Unselect all',
    checked: 'item selected',
    checkedPlural: 'items selected',
    searchPlaceholder: 'Find',
    defaultTitle: 'Select',
    allSelected: 'All selected',
  };


  private optionsModel: number[] = [];

  constructor(private _fb: FormBuilder, private _userService: UserService, private _storyService: StoryService, private _mediaPost: MediaPostService,
    private _community: CommunityService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._userService.getLoggedinInUser().subscribe(sub => {

      this.user = {
        id: sub.ID,
        displayName: sub.DisplayName,
        imageURL: sub.ImageURL,
        defaultCommunityID: sub.DefaultCommunityID
      };

      this.optionsModel.push(this.user.defaultCommunityID);

      this._community.GetUserCommunities(this.user.id).subscribe(sub => {

        this.myOptions = [];//clear the array        

        //set the array
        sub.forEach(element => {
          let option: IMultiSelectOption = { id: element.ID, name: element.Name };

          this.myOptions.push(option);
        });


      });
    });

  }

  post() {

    if (this.user && (this.postText != '' || this.mediaName != '')) {

      this._storyService.SavePost(this.user.id, this.postText, this.mediaType, this.mediaName, this.optionsModel).subscribe(sub => {
        let id = sub;
        this.isUploadingImage = false;
        this.uploaded = false;
        this.postText = "";
        this.mediaName = "";
        this.mediaType = "";
        this.videoSelected = false;
        this.imageSelected = false;

        this.optionsModel = [];
        this.optionsModel.push(this.user.defaultCommunityID);

        if (this.user.defaultCommunityID > 0) {

          let activeCommunity = this.user.defaultCommunityID;

          if(sessionStorage.getItem("activeCommunity") != null){
            
            activeCommunity = +sessionStorage.getItem("activeCommunity")
          }

          let link = ['/Feed/' + this.user.defaultCommunityID];
          this.router.navigate(link);
        }
      });
    }
  }

  imageFileChange(event) {
    this.imageSelected = true;
    this.uploaded = false;
    this.isUploadingImage = true;

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);


      this._mediaPost.postImage(formData, 'Story').subscribe(sub => {
        this.uploaded = true;
        this.isUploadingImage = false;

        this.mediaName = sub;
        this.mediaType = "Image";

      });
    }
  }

  videoFileChange(event) {
    this.videoSelected = true;
    this.uploaded = false;
    this.isUploadingImage = true;

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);


      this._mediaPost.postVideo(formData).subscribe(sub => {
        this.uploaded = true;
        this.isUploadingImage = false;

        this.mediaName = sub;
        this.mediaType = "Video";
      });
    }
  }

  onChange() {
    console.log(this.optionsModel);
  }
}
