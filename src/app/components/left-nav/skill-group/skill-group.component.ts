import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skill-group',
  templateUrl: './skill-group.component.html',
  styleUrls: ['./skill-group.component.css']
})
export class SkillGroupComponent implements OnInit {

  constructor() { }
  skills=[
    {
      skill:'UX Designer'
    }, {
      skill:'User Interview'
    }, {
      skill:'Research'
    }, {
      skill:'JS'
    }, {
      skill:'Mobile'
    },  {
      skill:'Copywriting'
    }, {
      skill:'logo'
    }, 
    ]
  ngOnInit(): void {
  }

}
