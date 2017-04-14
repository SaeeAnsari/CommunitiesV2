import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'leftNavigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  myCommunities = [
      {Menu: 'GTA'}, 
      {Menu: 'Schools Friends'}, 
      {Menu: 'Music Lovers'}
  ];

  featuredCommunities = [
     {Menu: 'Book Lovers Club'}, 
      {Menu:'Bucklist Crazies'}, 
      {Menu:'IDEAs to IPO'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
