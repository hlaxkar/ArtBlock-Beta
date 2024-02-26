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
 

  calculateStrength(item: any) {
    if (item < 8) {
      this.strength = 'Weak';
    } else if (item >= 8 && item < 12) {
      this.strength = 'Medium';
    } else {
      this.strength = 'Strong';
    }
  }


  signupUser(data:any) {
    
    this.apiService.post<any>('users',data)
    .subscribe(res => {
      alert('Signup Successful');
    }, err=>{
      console.log(err.error);
    });
  
   
    
  }
}
