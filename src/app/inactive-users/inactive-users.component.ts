import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  users: string[];

  constructor(private userService: UsersService, private counterService: CounterService){}

  ngOnInit(): void {
      this.users = this.userService.inactiveUsers
  }

  onSetToActive(id: number) {
    this.userService.onSetToActive(id)
    this.counterService.counterUpdated.emit(id)
  }
}
