import { Component, Input, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/customs/user-service.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent implements OnInit {
  
  @Input() data: any;
  
  
  ngOnInit(): void {
  }

}
