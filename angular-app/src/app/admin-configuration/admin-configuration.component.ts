import { Component, OnInit } from '@angular/core';
import {ThemePalette} from "@angular/material/core";

@Component({
  selector: 'app-admin-configuration',
  templateUrl: './admin-configuration.component.html',
  styleUrls: ['./admin-configuration.component.css']
})
export class AdminConfigurationComponent implements OnInit {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = undefined;

  toggleBackground() {
    this.background = this.background ? undefined : 'primary';
  }

  addLink() {
    this.links.push(`Link ${this.links.length + 1}`);
  }

  constructor() {

  }

  ngOnInit(): void {
  }

  /*shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);*/

}
