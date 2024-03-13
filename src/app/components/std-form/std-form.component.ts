import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Istd } from 'src/app/model/student';

@Component({
  selector: 'app-std-form',
  templateUrl: './std-form.component.html',
  styleUrls: ['./std-form.component.scss']
})
export class StdFormComponent implements OnInit {

  @ViewChild("fname")fname !: ElementRef;
  @ViewChild("lname")lname !: ElementRef;
  @ViewChild("email")email !: ElementRef;
  @ViewChild("contact")contact !: ElementRef;

  @Output() stdData : EventEmitter<Istd> = new EventEmitter<Istd>()


  constructor() { }

  ngOnInit(): void {
    
  }

  onAddStudent(){    
    let obj : Istd = {
      fname : this.fname.nativeElement.value,
      lname : this.lname.nativeElement.value,
      email : this.email.nativeElement.value,
      contact : this.contact.nativeElement.value
    }

    if(!Object.values(obj).includes("")){
      console.log(obj);
      this.stdData.emit(obj);

       this.fname.nativeElement.value = '';
       this.lname.nativeElement.value = '';
       this.email.nativeElement.value = '';
       this.contact.nativeElement.value = '';

      
    }   
  }
  }

