import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postbox',
  templateUrl: './postbox.component.html',
  styleUrls: ['./postbox.component.css']
})
export class PostboxComponent implements OnInit {

  constructor() { }
@Input() post:any;
  ngOnInit(): void {
    
  }

}
