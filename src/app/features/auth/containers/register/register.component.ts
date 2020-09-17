import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initRegistrationForm();
  }

  initRegistrationForm(): void {
    this.registerForm = this.fb.group({
      fname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      lname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
    });
  }

  get fname(): FormControl {
    return this.registerForm.controls.fname as FormControl;
  }

  get lname(): FormControl {
    return this.registerForm.controls.lname as FormControl;
  }

  get email(): FormControl {
    return this.registerForm.controls.email as FormControl;
  }

  get password(): FormControl {
    return this.registerForm.controls.password as FormControl;
  }

  async createUser(): Promise <void> {
    this.loading = true;
    await this.authService.createUser(
      this.registerForm.value.email,
      this.registerForm.value.password,
      `${this.registerForm.value.fname} ${this.registerForm.value.lname}`);
    this.loading = false;
  }

}
