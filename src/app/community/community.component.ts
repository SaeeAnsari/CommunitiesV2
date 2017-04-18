
import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'
import { ActivatedRoute, RouterModule, Router } from '@angular/router';

import { CommunityService } from '../services/community.service'



import { Community } from '../interfaces/community';

@Component({
  selector: 'community-add-edit',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css'],
  providers: [CommunityService]
})
export class CommunityComponent implements OnInit {
  public communityForm: FormGroup;
  public events: any[] = []; // use later to display form changes
  //private communityService = new CommunityService();

  constructor(private _fb: FormBuilder, private _communityService: CommunityService, private _route: ActivatedRoute, private _router:Router) { }

  private id: number;
  name: string;
  private subscription;

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

    this._communityService.SaveCommunity(model)
    .subscribe(sub=>{
      var x = 0;
      x = 22;
      
      this.id = sub;

      

      this._router.navigate(['/UserSearch']);

    })
  }  
}
