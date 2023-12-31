import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UsersComponent } from './users/users.component';
import { TodosComponent } from './todos/todos.component';
import { AddtodosComponent } from './addtodos/addtodos.component';
import { AddusersComponent } from './addusers/addusers.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    TodosComponent,
    AddtodosComponent,
    AddusersComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,FormsModule
  ]
})
export class DashboardModule { }
