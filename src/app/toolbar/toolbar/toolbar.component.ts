import {Component, OnInit} from '@angular/core';
import {NavItem} from '../../shared/models/nav-link';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  navLinks: NavItem[] = [
    {
      link: '/',
      title: 'home'
    },
    {
      link: '/heroes',
      title: 'heroes'
    },
    {
      link: '/villians',
      title: 'villians'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
