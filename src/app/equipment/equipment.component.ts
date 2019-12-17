import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  enableItems : boolean[]= [];
  nearMaxMass : boolean = false;

  equipmentItems: object[] = [
      {name: 'Duct Tape', mass: 0.5},
      {name: 'Space Camera', mass: 20},
      {name: 'Food', mass: 150},
      {name: 'Oxygen Tanks', mass: 400},
      {name: 'AE-35 Unit', mass: 5},
      {name: 'ISS Supplies', mass: 800},
      {name: 'Water', mass: 250},
      {name: 'Satellite', mass: 1200},
      {name: 'R2 Unit', mass: 32}
  ];
  cargoHold: object[] = [];
  cargoMass: number = 0;
  maximumAllowedMass: number = 2000;
  maxItems: number = 10;

  constructor() {
    for (let i = 0; i< this.equipmentItems.length; i++){
      this.enableItems.push(false);
    }
  }

  ngOnInit() { }

  // Code your addItem function here:
  //When clicked, an Add to Cargo Hold button adds the selected equipment to the cargoHold array and updates the cargoMass variable
  addItem(equipment :object){
    let isWithin200kg : Boolean = false;
    this.cargoHold.push(equipment);
    this.cargoMass += equipment['mass'];
    if (Math.abs(this.cargoMass - this.maximumAllowedMass) <= 200){
      isWithin200kg = true;
    }
    this.updateEnableItems();
    return isWithin200kg;
  }
  
  updateEnableItems(){
    //If all of the cargo hold spots are full (cargoHold.length === maxItems), disable the button.
    if (this.cargoHold.length === this.maxItems){
      for (let i = 0; i< this.enableItems.length; i++){
        this.enableItems[i] = true;
      }
    }

    //If adding the item to the cargo hold would exceed maximumAllowedMass, disable the button.
    for (let i = 0; i< this.enableItems.length; i++){
      if ((this.cargoMass + this.equipmentItems[i]['mass']) > this.maximumAllowedMass){
        this.enableItems[i] = true;
      }
    }
  }

  emptyHold(){
    this.cargoHold = [];
    this.cargoMass = 0;
    this.enableItems = [];
    this.nearMaxMass = false;
    for (let i = 0; i< this.equipmentItems.length; i++){
      this.enableItems.push(false);
    }
  }
  
}

/*As items are added to the hold,
their names should appear in the Cargo Hold section of the page.
Also, the Mass in Hold, Mass Budget Remaining, and Spots Filled values should update.
The Add to Cargo Hold buttons should be disabled if all of the spots in the hold have been filled.
If the mass of a particular item will push the cargo hold over maximumAllowedMass, that item's button should be disabled.
If cargoMass comes within 200 kg of maximumAllowedMass, then the Mass Budget Remaining text should turn red.*/

