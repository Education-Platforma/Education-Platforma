import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/CRUDs/user.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-overwiew',
  templateUrl: './overwiew.component.html',
  styleUrl: './overwiew.component.scss'
})
export class OverwiewComponent implements OnInit{
topStudents: any;
userName: any;
userId: any;

  constructor(private userService: UserService) { 

  }
  ngOnInit(): void {
    // console.log(localStorage.getItem('accessToken'));
    this.userName = jwtDecode(localStorage.getItem('accessToken')!);
    // console.log(this.userName);
    this.userService.getAllUsers().subscribe(res => {
      // console.log(res);
      this.topStudents = res.slice(0, 5);
      
    })
    this.userId = this.userService.getUserByName(this.userName);
    console.log(this.userId);
    localStorage.setItem('userId', this.userId);
  }

  



  


}
