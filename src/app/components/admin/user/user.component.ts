import { Component } from '@angular/core';
import { STUDENTS, Student } from '../../../models/user';
// import { USERS, User } from '../../../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})




export class UserComponent {

  students: Student[] = STUDENTS;

  selected1: string = "Alltime"
  selected2: string = "Alltime"
  selected3: string = "Alltime"

  addClass(){
    this.selected1 = "weekly"
    this.selected2 = "Alltime"
    this.selected3 = "Alltime "
  }
  addClass2(){
    this.selected2 = "weekly"
    this.selected1 = "Alltime"
    this.selected3 = "Alltime "
  }
  addClass3(){
    this.selected3 = "weekly"
    this.selected2 = "Alltime"
    this.selected1 = "Alltime "
  }
}
