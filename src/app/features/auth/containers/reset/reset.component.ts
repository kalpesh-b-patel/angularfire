import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  resetForm: FormGroup;
  loading = false;
  constructor(private authService: AuthService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initResetForm();
  }

  initResetForm(): void {
    this.resetForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get email(): FormControl {
    return this.resetForm.controls.email as FormControl;
  }

  async reset(): Promise <void> {
    this.loading = true;
    await this.authService.reset(
      this.resetForm.value.email);
    this.loading = false;
  }

}
