import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  mainform!: FormGroup
  validation = false
  values: any;
  errorMessage: any;
  constructor(
    private grp: FormBuilder,
    private service: LoginService,
    private rout: Router
  ) { }

  ngOnInit(): void {
    this.mainform = this.grp.group({
      userName: [null, Validators.required],
      password: [null, Validators.required]
    })
  }
  get f() {
    return this.mainform.controls
  }
  onsubmit() {
    this.validation = true;
    if (this.mainform.invalid) {
      return
    }
    this.service.createform(this.mainform.value).subscribe(res => {
      this.values = res;
      localStorage.setItem('data', this.values.data.jwt)
      this.rout.navigate(['/header'])
    }, err => {
      this.errorMessage = err.error.error.message;
    })
  }
  changeType: boolean = true;
  visible: boolean = true;
  onclick() {
    // this.errorMessage = null;
    this.changeType = !this.changeType;
  }
  inputs() {
    this.errorMessage = null;
  }
}
