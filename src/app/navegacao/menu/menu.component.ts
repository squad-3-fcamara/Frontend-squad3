import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menu!: Menu[];
  constructor() { }

  ngOnInit(): void {
  }

}
