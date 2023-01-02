import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-community-item',
  templateUrl: './community-item.component.html',
  styleUrls: ['./community-item.component.css']
})
export class CommunityItemComponent implements OnInit {
  
  @Input() data:any;
  


  constructor() { }

  ngOnInit(): void {
  }

}
