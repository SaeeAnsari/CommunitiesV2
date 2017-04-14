import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  @Input() PostMessage: string;
  @Input() PostMediaURL: string;

  constructor() { }

  ngOnInit() {
    
  }

}
