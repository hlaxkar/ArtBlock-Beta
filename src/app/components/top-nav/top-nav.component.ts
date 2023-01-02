import { Component, Input, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/customs/user-service.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {

  userData: any;

  constructor(private userService: UserServiceService) {
    this.getUserData();
  }

  async getUserData() {
    this.userData = await this.userService.getUserData();
    this.userData = JSON.parse(this.userData);
    console.log(this.userData);

    
  }

  ngOnInit(): void {

  }

}
