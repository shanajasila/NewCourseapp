import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  id=""
  courseTitle=""
  description=""
  venue=""
  duration=""
  date=""

  constructor(private api:ApiService){}
  readvalue=()=>{
    let data={"id":this.id,"courseTitle":this.courseTitle,"description":this.description,"venue":this.venue,"duration":this.duration,"date":this.date}
    console.log(data)
    this.api.addcourse(data).subscribe(
      (response:any)=>{
        console.log(response)
        // if(response.status=="success"){

        // }
      }
    )
  }
}
