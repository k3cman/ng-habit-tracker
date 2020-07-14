import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navItems = [
    {
      icon: 'dashboard',
      path: 'dashboard'
    },
    {
      icon: 'view_week',
      path: 'week'
    },
    {
      icon: 'event',
      path: 'month'
    },
    {
      icon: 'tune',
      path: 'settings'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
