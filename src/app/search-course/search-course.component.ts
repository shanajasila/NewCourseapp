import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.css']
})
export class SearchCourseComponent {


  courseTitle=""
  searchData:any=[]
  constructor(private api:ApiService){}
  readValue=()=>{
    let data={"courseTitle":this.courseTitle}
    console.log(data)
    this.api.searchcourse(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.length==0){
          alert("Invalid Course Title")
        }
        else{
          this.searchData=response
        }
      }
    )
  }
}
