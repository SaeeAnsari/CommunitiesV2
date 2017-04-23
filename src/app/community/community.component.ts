
import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

import { CommunityService } from '../services/community.service'
import { MediaPostService } from '../services/media-post.service';
import { UserService } from '../services/user.service';

import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';



import { Community } from '../interfaces/community';

@Component({
  selector: 'community-add-edit',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
  providers: [CommunityService, MediaPostService, UserService]
})
export class CommunityComponent implements OnInit {
  public communityForm: FormGroup;
  public events: any[] = []; // use later to display form changes
  //private communityService = new CommunityService();

  constructor(private _fb: FormBuilder, private _communityService: CommunityService, private _route: ActivatedRoute, private _router: Router,
    private http: Http, private _mediaPost: MediaPostService, private _userService: UserService) {

  }

  private id: number;
  name: string;
  private subscription;
  private isUploadingImage = false;
  private communityImage: string = '';
  private uploadMessage: string = '';
  private uploaded: boolean = false;

  ngOnInit() {
    this.communityForm = this._fb.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      description: ['']
    });

    this.subcribeToFormChanges();

    this.subscription = this._route.params.subscribe(params => {
      this.id = +params["id"];
    });

    this.loadCommunity();


  }

  loadCommunity() {
    if (this.id > 0) {
      this._communityService.GetCommunity(this.id).subscribe(sub => {
        this.communityForm.controls['name'].setValue(sub.Name);
        this.communityForm.controls['description'].setValue(sub.Description);
      });

      this.uploadMessage = "Update?";
    }
    else {
      this.uploadMessage = "Upload a Picture.."
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  subcribeToFormChanges() {
    const myFormStatusChanges$ = this.communityForm.statusChanges;
    const myFormValueChanges$ = this.communityForm.valueChanges;

    myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
    myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
  }


  saveCommunity(model: Community, isValid: boolean) {
    if (this.id > 0 && this.id != undefined) {
      model.id = this.id;
    }

    if (this.communityImage != undefined && this.communityImage.length > 0) {
      model.imageURL = this.communityImage;
    }

    this._userService.getLoggedinInUser().subscribe(s => {
      let userID = s.ID;

      this._communityService.SaveCommunity(model, userID)
        .subscribe(sub => {
          this.id = sub;
          this._router.navigate(['/UserSearch', this.id]);
        })
    });
  }

  fileChange(event) {
    this.isUploadingImage = true;

    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      let file: File = fileList[0];
      let formData: FormData = new FormData();
      formData.append('uploadFile', file, file.name);


      this._mediaPost.postMedia(formData).subscribe(sub => {
        this.uploaded = true;
        this.isUploadingImage = false;
        this.loadCommunity();

        this.communityImage = sub;
      });
    }
  }
}