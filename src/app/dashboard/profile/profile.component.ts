import { Component } from '@angular/core';
import { User } from '../../shared/user';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user:User = JSON.parse(localStorage.getItem('connectedUser')||'{}');
  id:number=-1;
  constructor(private userService:UserService) { 

    this.id=this.userService.getUserByEmail(this.user.email);
  }
  updateUser(){
    this.userService.updateUser(this.id,this.user);
  }
}
