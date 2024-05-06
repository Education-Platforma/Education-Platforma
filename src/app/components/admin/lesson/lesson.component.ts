import { Component } from '@angular/core';
import { CrudService } from '../../../services/CRUDs/crud.service';
import { LessonModel } from '../../../models/lesson-model';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrl: './lesson.component.scss'
})
export class LessonComponent {
  title: string = '';
  expForWaatching: number = 5;
  // courseId: string = 'a1892ffc-bfeb-4913-a2b7-c9d3e50a1155';
  videoFile: any;

  lesson: LessonModel = {
    Title: '',
    CourseId: 'a1892ffc-bfeb-4913-a2b7-c9d3e50a1155',
    ExpForWatching: 0,
    Video: null
  };

  constructor(private crudService: CrudService) { }

  // name = 'Angular';

  private base64textString:String="";
  
// convertDataURIToBinary(dataURI: any) {
//     var base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
//     var base64 = dataURI.substring(base64Index);
//     var raw = window.atob(base64);
//     var rawLength = raw.length;
//     var array = new Uint8Array(new ArrayBuffer(rawLength));

//     for (let i = 0; i < rawLength; i++) {
//         array[i] = raw.charCodeAt(i);
//     }
//     return array;
// }

upload(event: any) {
  const file = event.target.files[0];
  const preview: any = document.getElementById('preview');
  const reader = new FileReader();
  let byteArray;

  reader.addEventListener("load", function () {
      // convert image file to base64 string
      console.log('base64', reader.result);
      preview.src = reader.result as string;
      byteArray = convertDataURIToBinary(reader.result as string);
      console.log('byte array', byteArray);

  }, false);

  if (file) {
      reader.readAsDataURL(file);
  }

  
}


  submit() {

    this.lesson.Title = this.title;
    this.lesson.ExpForWatching = this.expForWaatching;
    this.lesson.Video = this.base64textString;
    console.log(this.lesson);
    try{
      this.crudService.CreateLesson(this.lesson).subscribe(res => {
        console.log(res)
        if(res.isSuccess){
          alert('Succesful')
        }
        else{
          alert('Unsuccesful')
        }
      })
      // alert('Succesful')
    }
    catch(error){
      console.log(error);
      alert('Unsuccesful');
    }

    this.title = '';
    this.expForWaatching = 5;
    this.videoFile = null;
    
  }
}
function convertDataURIToBinary(dataURI: any): any {
  
  var base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
  var base64 = dataURI.substring(base64Index);
  var raw = window.atob(base64);
  var rawLength = raw.length;
  var array = new Uint8Array(new ArrayBuffer(rawLength));

  for (let i = 0; i < rawLength; i++) {
      array[i] = raw.charCodeAt(i);
  }
  return array;
}

