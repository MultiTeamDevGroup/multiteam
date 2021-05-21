import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentpath = '/';

  constructor(private router: Router) {
    this.router.events.subscribe((e: any) => {
      this.currentpath = e.url;
    });
  }

  ngOnInit(): void {
  }

}
