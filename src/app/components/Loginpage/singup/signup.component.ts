import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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

 
 
  onLogin(){
    
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('users', JSON.stringify(this.signupObj));
    
    sessionStorage.setItem('userid',this.loginObj.userName);
    console.log(sessionStorage.getItem('userid'));
  }
  signupUser(item:any){
    console.log(item);
    
  }
}
