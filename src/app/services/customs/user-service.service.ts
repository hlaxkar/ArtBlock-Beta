import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private userData: any;

  constructor(private router: Router) { }
  getUserData() {
    // If the user data has already been retrieved, return it
    if (this.userData) {
      return this.userData;
    }
    //Otherwise, check if the userid is set in sessionStorage, if not, redirect to Login page
    if (!sessionStorage.getItem('userid')) {
           
      return this.router.navigate(['/Login']);
    } else {


      // Otherwise, retrieve the data from the backend server
      this.userData = localStorage.getItem('users')
      return this.userData;
    }
  }
}
