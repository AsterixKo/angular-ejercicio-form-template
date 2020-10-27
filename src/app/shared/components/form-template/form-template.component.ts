import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent implements OnInit {

  firstName: string;
  lastName: string;
  age: number;
  emailAddress: string;
  city: string;

  constructor() { }

  ngOnInit(): void {
  }

  saveForm(formdata) {
    console.log('saveForm...');

    // if (formdata.status === 'INVALID') {
    //   console.log('El formulario es inválido');
    //   return;
    // }

    console.log('Este es el form data:', formdata);

    // console.log('Los valores del formulario son', formdata.value);

    // console.log('El nombre del usuario es', formdata.value.nombre);

    // this.nombre = formdata.value.nombre;

    const { name, lastName, age, email, city } = formdata.value;
    this.firstName = name;
    this.lastName = lastName;
    this.age = age;
    this.emailAddress = email;
    this.city = city;
  }

}
