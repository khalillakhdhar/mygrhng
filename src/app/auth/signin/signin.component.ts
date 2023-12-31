import { Component } from '@angular/core';
import { User } from '../../shared/user';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  user:User = new User();
  constructor(private userService:UserService)
  {

  }
  authUser(){
    if(this.userService.authUser(this.user)){
      // redirect to http://localhost:4200/dashboard
      window.location.href = '/dashboard';
    }else{
      alert('please signup');
    }
    this.user = new User();
  }

}
