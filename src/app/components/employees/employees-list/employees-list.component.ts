import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent {

  employees: Employee[] = [
    {
      id: '3c4e5327-be8b-4c3d-a978-168f0c214d18',
      name: 'John Doe',
      email: 'john.doe@mail.com',
      phone: 719338629,
      salary: 60000,
      department: 'Human Resources'
    },
    {
      id: '06e02d97-2314-4428-aa96-7fd43dd94dc6',
      name: 'Sameer Saini',
      email: 'sameer.saini@mail.com',
      phone: 987234587,
      salary: 70000,
      department: 'Information Technology'
    },
    {
      id: 'e2aaa7a0-4d15-4d9c-9166-9a01c0bb4321',
      name: 'Samantha James',
      email: 'samantha.james@mail.com',
      phone: 623987654,
      salary: 80000,
      department: 'Accounts'
    }
  ]
  constructor() {}

  ngOnInit(): void {
    this.employees
  }
}
