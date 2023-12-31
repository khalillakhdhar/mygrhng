import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  // disconnect
  disconnect(){
   // localStorage.removeItem('connectedUser');  si je veux supprimer un seul item
   localStorage.clear(); // supprimer tous les items
    // redirect to login
    window.location.href="/auth";
  }

}
