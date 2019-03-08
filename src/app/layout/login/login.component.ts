import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {AuthenticationService} from '../../services/Authentication/authentication.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private loginform:any;
  constructor(public fb: FormBuilder, private router: Router, private auth:AuthenticationService) {
    this.loginform = fb.group({
      username:['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit() {}

  // login function on submit
  onSubmit(){
    if(this.auth.login(this.loginform.value))
        this.router.navigate(['/'])
  }
}
