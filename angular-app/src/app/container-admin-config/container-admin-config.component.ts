import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container-admin-config',
  templateUrl: './container-admin-config.component.html',
  styleUrls: ['./container-admin-config.component.css']
})
export class ContainerAdminConfigComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  url="./assets/images/SacState.jpg"
  onselectFile(e:any) {
    if(e.target.files) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;
    }
    }
  }

}
