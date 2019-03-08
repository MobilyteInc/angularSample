import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-basiclayout',
  templateUrl: './basiclayout.component.html',
  styleUrls: ['./basiclayout.component.scss']
})
export class BasiclayoutComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
