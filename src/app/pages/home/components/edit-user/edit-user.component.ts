import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const userMock = {
  name: 'Natale Tagliaferro Neto',
  email: 'natalefenix@gmail.com',
  password: '123456',
  role: 'LD'
}

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  editUserForm: FormGroup;
  constructor(private router: Router) {

    this.editUserForm = new FormGroup({
      name: new FormControl(userMock.name, Validators.required),
      email: new FormControl(userMock.email, [Validators.required, Validators.email]),
      password: new FormControl(userMock.password, [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
      role: new FormControl(userMock.role, Validators.required)
    });
  }

  onSubmit() {
    console.log("Usuário editado: ", this.editUserForm.value);
    this.editUserForm.reset();
    this.router.navigate(["app", "users"]);
  }
}
