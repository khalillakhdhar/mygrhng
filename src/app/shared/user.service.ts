import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
users:User[]=[]
  constructor() { 
// load users from local storage
this.users = JSON.parse(localStorage.getItem('users') || '[]');

  }
  // save users to local storage
  saveUsers(user:User){
    this.users.push(user);
    localStorage.setItem('users',JSON.stringify(this.users));
  }
  // get all users
  getUsers(){
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
    return this.users;
  }
// delete user by id
  deleteUser(id:number){
    this.users.splice(id,1);
    localStorage.setItem('users',JSON.stringify(this.users));
  }
  // get user by id
  getUserById(id:number){
    this.users = JSON.parse(localStorage.getItem('users') || '[]');
   return this.users[id];
  }
  // update user by id
  updateUser(id:number,user:User){
    
    this.users[id] = user;
    localStorage.setItem('users',JSON.stringify(this.users));
  }  
  authUser(user:User){
    let us = this.users.find(x=>x.email === user.email && x.mdp === user.mdp);
    if(us){
      localStorage.setItem('connectedUser',JSON.stringify(us));
      return true;
    }
    return false;
  }
}
