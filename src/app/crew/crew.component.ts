import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  inCrew: boolean = false;
  crewIsFull: boolean = false;
  crew: object[] = [];
  activateMember: boolean[] = [];
  hovered : string ='';
  sex:string ='';

  candidates: object[] = [
    {sex:"Female", name: "Sally Ride", photo: 'https://handlers.education.launchcode.org/static/images/sally-ride.jpg'},
    {sex:"Female", name: "Mae Jemison", photo: 'https://handlers.education.launchcode.org/static/images/mae-jemison.jpg'},
    {sex:"Female", name: "Ellen Ochoa", photo: 'https://handlers.education.launchcode.org/static/images/ellen-ochoa.jpg'},
    {sex:"Male", name: "Frederick Gregory", photo: 'https://handlers.education.launchcode.org/static/images/frederick-gregory.jpg'},
    {sex:"Male", name: "Guion Bluford", photo: 'https://handlers.education.launchcode.org/static/images/guion-bluford.jpg'},
    {sex:"Male", name: "Kjell Lindgren", photo: 'https://handlers.education.launchcode.org/static/images/kjell-lindgren.jpg'},
    {sex:"Female", name: "Jeanette Epps", photo: 'https://handlers.education.launchcode.org/static/images/jeanette-epps.jpg'}
  ];

  constructor() {
    for(let i = 0; i < this.candidates.length; i++) {
      this.activateMember.push(false);
    }
  }

  ngOnInit() { }

  // Code the 'addCrewMember' function here:
  addCrewMember(candidate:object){
    let index:number = -1;
    let indexInCandidates:number = 0;
    for(let i = 0; i < this.crew.length; i++) {
      if (this.crew[i]['name'] === candidate['name']) {
        index = i;
        break;
      }
    }

    for(let i = 0; i < this.candidates.length; i++) {
      if (this.candidates[i]['name'] === candidate['name']) {
        indexInCandidates = i;
        break;
      }
    }

    if (index !== -1) {//found
      //If the candidate is already part of the crew, then their data should be removed from the crew array
      this.crew.splice(index,1);
      this.activateMember[indexInCandidates] = false;
    } else if (this.crew.length <= 2){
      //If the crew size is less than 3 AND the candidate is not part of the crew, then their data should be added to the crew array.
      this.crew.push(candidate);
      this.activateMember[indexInCandidates] = true;
    }
    this.crewIsFull = (this.crew.length == 3);
  }

}
