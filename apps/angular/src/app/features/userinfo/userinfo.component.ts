import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'angular-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css'],
})

export class UserinfoComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserInfo();
  }

  public getUserInfo() {
    this.userService.getCurrentUserInfo().subscribe((res: any) => {
      console.log(res,'user res');
    });
  }
}
