import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {
  editingCrewMember: boolean[]= [];
  
  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];
  
  constructor() {
    //this.initEditingCrewMember();
    for (let i = 0; i< this.crew.length; i++){
      this.editingCrewMember.push(false);
    }
  }

  ngOnInit() {
    
  }

  /*initEditingCrewMember(){
    for (let i = 0; i< this.crew.length; i++){
      this.editingCrewMember.push(false);
    }
  }*/

  add(memberName: string, isFirst: boolean) {
    let obj: object = {name: memberName, firstMission: isFirst};
    let found:Boolean = false;

    for(let i = 0; i < this.crew.length; i++) {
      if (this.crew[i]['name'] === memberName) {
          found = true;
          break;
      }
    }
    
    if (!found && memberName!=''){
      this.crew.push(obj);
      this.editingCrewMember.push(false);
    }    
  }

  remove(member: object) {
    let index: number = this.crew.indexOf(member);
    if (index > -1) {
      this.crew.splice(index, 1);
      this.editingCrewMember.splice(index, 1);
    }
  }

  updateCrewMember(member : object) {
    let index: number = this.crew.indexOf(member);
    this.crew[index] = member;
    this.editingCrewMember[index] = false;
  }
}
