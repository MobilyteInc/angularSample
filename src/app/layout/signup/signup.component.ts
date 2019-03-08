import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../login/login.component.scss']
})
export class SignupComponent implements OnInit {
  private Registerform:any;
  constructor(public fb: FormBuilder, private router: Router,) {
    this.Registerform = fb.group({
      username:['', Validators.required],
      email:['', Validators.required],
      city:['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit() {}

  // Register form function on submit
  onSubmit(){
    this.router.navigate(['/login']);
  }
}
