import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-display',
  templateUrl: './student-display.component.html',
  styleUrls: ['./student-display.component.css']
})
export class StudentDisplayComponent implements OnInit {

  studno: number;
  studfname: string;
  studlname: string;
  studprog: string;
  studyr: number;

  studentCollection: Array<object> = [];

  constructor() { }

  ngOnInit() {
  }

}
