import { Component } from '@angular/core';
import { Istd } from './model/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test3';

  studentsArr : Array<Istd>= [
    {
      fname : "Priti",
      lname : "Jadhav",
      email : "pj@gmail.com",
      contact : 21345678911
    }
   ]

   getStdData(stdObj : Istd){
    console.log(stdObj);
    this.studentsArr.push(stdObj)
   }

}
