import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  employeeDetails: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }

  constructor(private route: ActivatedRoute, private employeeService: EmployeesService, private router: Router) {  }

  ngOnInit(): void{
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if (id) {
          // Call API
          this.employeeService.getEmployee(id)
          .subscribe({
            next: (response) => {
              this.employeeDetails = response;
            }
          });
        }
      }
    })
  }

  updateEmployee() {
    this.employeeService.updateEmployee(this.employeeDetails.id, this.employeeDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['employees'])
      }
    })
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['employees'])
      }
    });
  }
}
