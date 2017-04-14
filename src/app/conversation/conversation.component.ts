import { Component, OnInit } from '@angular/core';
import {MessageService} from '../services/message.service';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.css']
})
export class ConversationComponent implements OnInit {

  private _messageList=  [];

  constructor() { }

  ngOnInit() {

    this.GetConvrsationMessages();
  }

  GetConvrsationMessages(){
    for(var i =0;i<20; i++){

      let message = ({
         id: i,
         message: 'Message' + i*9,
         timestamp: new Date('3/22/2018'),
         userID: 2,
         IsReply: true             
      });

      this._messageList.push(message);
    }
  }
}
