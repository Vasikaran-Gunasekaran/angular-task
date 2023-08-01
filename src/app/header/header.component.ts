import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  name: any
  constructor(
    private rout: Router,
    private service: LoginService
  ) { }
  ngOnInit(): void {
    this.service.userdetails().subscribe(res => {
      this.name = res
    })
  }

  logOut() {
    if(confirm('Are you sure you want to log out?')){
      localStorage.clear()
      this.rout.navigate(['/login'])
    }
  }
}
