import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

title:string = 'Employee Managemnet Solution'

  constructor() { }

  ngOnInit(): void {
  }

}
