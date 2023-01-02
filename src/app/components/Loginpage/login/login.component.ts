import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  signupUsers: any = [];
  
  loggedUser: any[] = [];
  signupObj:any = {
    userName: 'hlaxkar30',
    email: 'hlaxkar30@gmail.com',
    password: '0000',
    name: 'Haru Laxkar',
    pfp: 'pfp2.png',
    banner: 'banner1.jpg',
    bio: `Life is what happens to you while you scroll through Instagram`,
    followers: 300,
    followings: 500
  };
  loginObj: any = {
    userName: '',
    password: '',
    keeplog: false
  };

  ngOnInit(): void {}
 
  onLogin(){
    
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('users', JSON.stringify(this.signupObj));
    
    sessionStorage.setItem('userid',this.loginObj.userName);
    console.log(sessionStorage.getItem('userid'));
  }

}
