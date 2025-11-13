import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from './user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ]
})
export class Login {
  hide = true;

  form?: FormGroup; 

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  }

  get email() { return this.form!.get('email'); }
  get password() { return this.form!.get('password'); }

  tryLogin() {
    if (this.form!.invalid) return;
     this.userService.login(this.email?.value as string, this.password?.value as string).subscribe(b => {
      console.log("Successful login? ", b);
    });
  }

  tryRegister() {
    if (this.form!.invalid) return;
    this.userService.register(this.email?.value as string, this.password?.value as string).subscribe(b => console.log(`Register returned ${b}`));
  }
}
