import { Component, Input, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/customs/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData: any;

  constructor(private userService: UserServiceService) {
    this.getUserData();
  }

  async getUserData() {
    this.userData = await this.userService.getUserData();
    this.userData = JSON.parse(this.userData);
    console.log(this.userData);
  }
  // this.data = {
  //   username: this.userData.userName,
  //   fname: this.userData.name,
  //   pfp: 'pfp2.png',
  //   banner: 'banner2.jpg',
  //   bio: `Life is what happens to you while you scroll through Instagram`,
  //   followers: 200,
  //   followings: 100,
  // }

  ngOnInit(): void { }
}
