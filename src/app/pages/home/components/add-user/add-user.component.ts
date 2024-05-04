import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

    addUserForm: FormGroup;
    constructor(private router: Router) {

      this.addUserForm = new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]),
        role: new FormControl('', Validators.required)
      });
    }

    onSubmit() {
      console.log("Usuário: ", this.addUserForm.value);
      this.addUserForm.reset();
      this.router.navigate(["app", "users"]);
    }
}
