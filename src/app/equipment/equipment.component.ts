import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {
  editingEquipment: boolean[]= [];
  
  equipmentList: string[] = [
    'Habitat dome',
    'Drones',
    'Food containers',
    'Oxygen tanks'
  ];

  constructor() {
    for (let i = 0; i< this.equipmentList.length; i++){
      this.editingEquipment.push(false);
    }
   }

  ngOnInit() {
  }

  add(equipment:string){
    if (equipment!='' && !this.equipmentList.includes(equipment)){
      this.equipmentList.push(equipment);
      this.editingEquipment.push(false);
    }
  }

  remove(equipment: string) {
    let index: number = this.equipmentList.indexOf(equipment);
    if (index > -1) {
      this.equipmentList.splice(index, 1);
      this.editingEquipment.splice(index, 1);
    }
  }

  updateEquipment(equipment:string, oldEquipmentValue:string) {
    let index: number = this.equipmentList.indexOf(oldEquipmentValue);
    this.equipmentList[index] = equipment;
    this.editingEquipment[index] = false;
  }

}
