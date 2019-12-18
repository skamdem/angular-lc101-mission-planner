import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  selectedExperimentsArray: string[] = [];
  experimentsIsFull : boolean = false;
  maxExperimentsNumber : number = 4;
  selectedExperiments : boolean[] = [];

   experiments: string[] = ['Moon soil sample', 'Plant growth in orbit', 'Human bone density changes', 'Water droplet podcast for grades K-5', 'Satellite launch'];

   constructor() { }

   ngOnInit() { }

  //Add experiment selected
  addExperiment(experiment){
    let index:number = this.getIndexInGlobalExperimentsArray(experiment);
    let indexFromSelectedArray:number = this.getIndexInSelectedExperimentsArray(experiment);

    if (indexFromSelectedArray !== -1) {//Already chosen experiement
      //If the experiement is already chosen, then it should be removed from the page bottom
      this.selectedExperimentsArray.splice(indexFromSelectedArray,1);
      this.selectedExperiments[index] = false;
    } else if ((!this.selectedExperiments[index]) && (this.selectedExperimentsArray.length < this.maxExperimentsNumber)){
      this.selectedExperimentsArray.push(experiment);
      this.selectedExperiments[index] = true;
    } 
    this.experimentsIsFull = (this.selectedExperimentsArray.length == this.maxExperimentsNumber);
  }

  //remove experiment clicked
  removeExperiment(experiment){
    let index:number = this.getIndexInGlobalExperimentsArray(experiment);
    let indexInExperimentsArray:number = this.getIndexInSelectedExperimentsArray(experiment);

    this.selectedExperimentsArray.splice(indexInExperimentsArray,1);
    this.selectedExperiments[index] = false;   
  }

  //return index in Global Experiments Array
  getIndexInGlobalExperimentsArray(experiment:string):number{
    let indexInGlobalExperimentsArray:number = -1;
    for(let i = 0; i < this.experiments.length; i++) {
      if (this.experiments[i] === experiment){
        indexInGlobalExperimentsArray = i;
        break;
      }
    }
    return indexInGlobalExperimentsArray;
  }

  //return index in Selected Experiments Array
  getIndexInSelectedExperimentsArray(experiment:string):number{
    let indexInSelectedExperimentsArray:number = -1;
    for(let i = 0; i < this.selectedExperimentsArray.length; i++) {
      if (this.selectedExperimentsArray[i] === experiment){
        indexInSelectedExperimentsArray = i;
        break;
      }
    }
    return indexInSelectedExperimentsArray;
  }

}
