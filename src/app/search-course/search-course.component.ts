import { Component } from '@angular/core';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent {

  courseTitle=""
  readValue=()=>{
    let data={"courseTitle":this.courseTitle}
    console.log(data)
  }
}
