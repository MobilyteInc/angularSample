import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {AuthenticationService} from '../../services/Authentication/authentication.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private auth:AuthenticationService) { }

  ngOnInit() {
  }
  // logout fucntions
  logout(){
    this.auth.logout() ?  this.router.navigate(['/login']) :'';
  }

}
