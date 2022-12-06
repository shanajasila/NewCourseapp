import { Component } from '@angular/core';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {

  courseTitle=""
  description=""
  venue=""
  duration=""
  date=""

  readvalue=()=>{
    console.log(this.courseTitle)
  }
}
