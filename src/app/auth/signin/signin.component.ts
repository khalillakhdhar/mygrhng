import { Component } from '@angular/core';
import { User } from '../../shared/user';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  user:User = new User();
  constructor(private userService:UserService,private route:Router)
  {

  }
  authUser(){
    if(this.userService.authUser(this.user)){
      // redirect to http://localhost:4200/dashboard
      window.location.href = '/dashboard'; // redirection vers le dashboard
      // utiliser la methode navigate de router
    //  this.route.navigate(['/dashboard']); // redirection non recommandée dans ce cas car elle ne recharge pas le composant dashboard

    }else{
      alert('veillez verifier votre email et mot de passe ou inscrivez vous si vous n\'avez pas de compte');
    }
    this.user = new User();
  }

}
