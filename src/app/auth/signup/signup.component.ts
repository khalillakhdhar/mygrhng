import { Component } from '@angular/core';
import { User } from '../../shared/user';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user:User = new User();
  constructor(private userService:UserService) {

   }
    saveUser(){
      this.userService.saveUsers(this.user);
      this.user = new User();
    } 
}
