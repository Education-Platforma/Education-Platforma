import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss'
})
export class LessonComponent {
  title: string = '';
  expForWaatching: string = '';
  videoFile: any;
  submit() {
    this.title = '';
    this.expForWaatching = '';
    console.log(this.videoFile);
  }




}
