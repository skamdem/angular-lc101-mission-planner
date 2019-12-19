import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  missionName: string = "LC Angular 3";
  rocketName: string = "ICAN";
  editingRocket: boolean = false;
  editingMission: boolean = false;
  
  constructor() { }

  ngOnInit() {
  }

  updateMission(updatedName: string) {
    this.missionName = updatedName;
    this.editingMission = false;
  }

  invertRocket(){
    if(this.editingRocket){
      this.editingRocket = !this.editingRocket;
    }
  }

  updateRocket(updatedName: string) {
    this.rocketName = updatedName;
    this.editingRocket = false;
  }

  invertMission(){
    if(this.editingMission){
      this.editingMission = !this.editingMission;
    }
  }

}
