import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {
  msgs1: any = [];

  constructor() {}

  ngOnInit() {
    this.msgs1 = [
      { severity: 'error', summary: '404', detail: 'Route not found' },
    ];

  }
}
