import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]],
    });
  }

  get email(): FormControl {
    return this.loginForm.controls.email as FormControl;
  }

  get password(): FormControl {
    return this.loginForm.controls.password as FormControl;
  }

  async login(): Promise <void> {
    this.loading = true;
    await this.authService.login(
      this.loginForm.value.email,
      this.loginForm.value.password);
    this.loading = false;
  }

}
