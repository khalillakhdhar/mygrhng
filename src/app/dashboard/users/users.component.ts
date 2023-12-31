import { Component } from '@angular/core';
import { User } from '../../shared/user';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users:User[] = [];
  constructor( private userService:UserService) { 
    this.users = this.userService.getUsers();
    console.log("my users",this.users);
  }
deleteUser(id:number){
  if(confirm("êtes vous sûre de vouloir supprimer ?"))
  {
  this.userService.deleteUser(id);
  this.users = this.userService.getUsers();
  }
}

}
