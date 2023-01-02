import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-box',
  templateUrl: './community-box.component.html',
  styleUrls: ['./community-box.component.css']
})
export class CommunityBoxComponent implements OnInit {
  groups = [
    {
     group: 'UX Developers',
      image:'ring1.jpg'
    }, {
      group: 'Frontend Designers',
      image:'frontend.jpeg'
    }, {
      group: 'Full stack Developers',
      image:'fullstack.png'
    },
    {
      group: 'Full stack Developers',
      image:'fullstack.png'
    },{
      group: 'Full stack Developers',
      image:'fullstack.png'
    },{
      group: 'Full stack Developers',
      image:'fullstack.png'
    },{
      group: 'Full stack Developers',
      image:'fullstack.png'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
