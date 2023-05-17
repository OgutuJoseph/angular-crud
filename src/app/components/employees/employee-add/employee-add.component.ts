import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  addEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }

  constructor(private employeeService: EmployeesService, private router: Router) { }

  ngOnInit(): void {

  }

  addEmployee() {
    // console.log('add request: ', this.addEmployeeRequest)
    this.employeeService.addEmployee(this.addEmployeeRequest)
    .subscribe({
      next: (addedEmployee) => {
        // console.log('added employee here: ', addedEmployee)
        this.router.navigate(['employees'])
      }
    })
  }
}
