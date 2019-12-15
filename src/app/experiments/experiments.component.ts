import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {
  editingExperiment: boolean[]= [];
  experimentsList : string[] = [
    'Mars soil sample',
    'Plant growth in habitat',
    'Human bone density'
  ]
  constructor() {
    for (let i = 0; i< this.experimentsList.length; i++){
      this.editingExperiment.push(false);
    }
  }

  ngOnInit() {
  }
  add(experiment:string){
    if (experiment!='' && !this.experimentsList.includes(experiment)){
      this.experimentsList.push(experiment);
      this.editingExperiment.push(false);
    }
  }

  remove(experiment: string) {
    let index: number = this.experimentsList.indexOf(experiment);
    if (index > -1) {
      this.experimentsList.splice(index, 1);
      this.editingExperiment.splice(index, 1);
    }
  }

  updateExperiment(experiment:string, oldExperimentValue:string) {
    let index: number = this.experimentsList.indexOf(oldExperimentValue);
    this.experimentsList[index] = experiment;
    this.editingExperiment[index] = false;
  }

}
