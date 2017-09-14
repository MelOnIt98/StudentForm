import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent implements OnInit {

  studno: number;
  studfname: string;
  studlname: string;
  studprog: string;
  studyr: number;

  studentCollection: Array<object> = [];
  studentRecord: object;

  constructor() { }

  ngOnInit() {
  }

}
