import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../interfaces/message';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  constructor() { }


  @Input() Message: string;
  @Input() Timestamp: Date;
  @Input() ID: number;
  @Input() UserID: number;
  @Input() IsReply: boolean;


  ngOnInit() {
  }
}
