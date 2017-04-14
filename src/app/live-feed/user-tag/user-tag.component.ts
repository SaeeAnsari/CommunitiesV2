import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-user-tag',
  templateUrl: './user-tag.component.html',
  styleUrls: ['./user-tag.component.css']
})
export class UserTagComponent implements OnInit {

  @Input() ID: number;
  @Input() PostDate:Date;
  @Input() Name: string;
  @Input() ImageURL:string;

  constructor() { }

  ngOnInit() {
    console.log(this.ID);
  }

}
