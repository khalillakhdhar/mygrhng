import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-addoneuser',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addoneuser.component.html',
  styleUrl: './addoneuser.component.css'
})
export class AddoneuserComponent {
  user:User = new User();
  constructor(private userService:UserService) {

   }
    saveUser(){
      this.userService.saveUsers(this.user);
      this.user = new User();
    } 
}
