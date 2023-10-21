import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {

  // ngOnInit(): void {
  //     this.activeUsers = this.usersService.activeUsers;
  //     this.inactiveUsers = this.usersService.inactiveUsers;
  // }
}
