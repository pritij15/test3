import { Component, Input, OnInit } from '@angular/core';
import { Istd } from 'src/app/model/student';

@Component({
  selector: 'app-std-list',
  templateUrl: './std-list.component.html',
  styleUrls: ['./std-list.component.scss']
})
export class StdListComponent implements OnInit {

 @Input() stdArr !: Istd[]
 
  constructor() { }

  ngOnInit(): void {
    
  }

}
