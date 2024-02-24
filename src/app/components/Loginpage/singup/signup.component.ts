import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/apis/api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  strength: any = '';
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {


  }
  signupUsers: any = [];

  loggedUser: any[] = [];
  // signupObj: any = {
  //   id:'12',
  //   userName: 'hlaxkar30',
  //   email: 'hlaxkar30@gmail.com',
  //   password: '0000',
  //   name: 'Haru Laxkar',
  //   pfp: 'pfp2.png',
  //   banner: 'banner1.jpg',
  //   bio: `Life is what happens to you while you scroll through Instagram`,
  //   followers: 300,
  //   followings: 500
  // };
  loginObj: any = {
    userName: '',
    password: '',
    keeplog: false
  };


  calculateStrength(item: any) {
    if (item < 8) {
      this.strength = 'Weak';
    } else if (item >= 8 && item < 12) {
      this.strength = 'Medium';
    } else {
      this.strength = 'Strong';
    }
  }

  data2: any;
  // onLogin() {

  //   this.signupUsers.push(this.signupObj);
  //   localStorage.setItem('users', JSON.stringify(this.signupObj));

  //   sessionStorage.setItem('userid', this.signupObj.userName);
  //   console.log(sessionStorage.getItem('userid'));
  // }

  signupUser(data:any) {
    
    this.apiService.post<any>('users',data)
    .subscribe(res => {
      alert('Signup Successful');
    }, err=>{
      console.log(err.error);
    });
  
   
    
  }
}
