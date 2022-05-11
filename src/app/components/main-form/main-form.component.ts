import { EmployeeUser } from '../../functionalities/interfaces/employee.interfaces';
import { ClientUser } from '../../functionalities/interfaces/client.interfaces';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faRepeat } from '@fortawesome/free-solid-svg-icons';

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

  iconoSwitch;

  switcher:boolean = true;

  mensaje:string = "Cliente";

  constructor(private fb: FormBuilder) {
    this.iconoSwitch = document.getElementById("switch")

    /*Estructura del formulario de cliente*/
    this.UserForm = this.fb.group({
      email: [''],
      password: [''],
    });

    /*Estructura de formulario de empleado*/
    this.EmployeeForm = this.fb.group({
      code: [''],
      password: ['']
    });
  }

  ngOnInit(): void {
    library.add(faRepeat)
    dom.watch()
  }

  onSubmitCli(): void {
    console.log(this.UserForm.value)
  }

  onSubmitEmp():void{
    console.log(this.EmployeeForm.value)
  }

  onChange():void{
    if(this.switcher==true){
      this.switcher = false;
      this.mensaje = "Empleado"
    }else{
      this.switcher = true;
      this.mensaje = "Cliente";
    }
  }
}
