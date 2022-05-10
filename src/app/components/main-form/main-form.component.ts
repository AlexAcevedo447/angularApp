import {
  EmployeeUser
} from '../../functionalities/interfaces/employee.interfaces';
import {
  ClientUser
} from '../../functionalities/interfaces/client.interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css'],
})
export class MainFormComponent implements OnInit {
  email: any;

  /*Para el diseño de las cartas*/
  client!: ClientUser;
  /*Para el diseño de las cartas*/
  employee!: EmployeeUser;

  UserForm: FormGroup;
  EmployeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.UserForm = this.fb.group({
      email: [''],
      password: [''],
    });

    this.EmployeeForm = this.fb.group({
      code: [''],
      password: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.UserForm.value)
  }
}
