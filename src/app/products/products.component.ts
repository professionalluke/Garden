import { Component, OnInit } from '@angular/core';
import { Plant } from '../models/plant.model';
import { PlantService } from '../services/plant.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
   plants: Plant[];   //declaring plants to be the Plant[] model imported above

  constructor(private plantService: PlantService) { }

  ngOnInit() : void {
    this.getPlants();
  }

  getPlants(): void {
    this.plantService.getPlants()     //plantService.getPlants() pulls the method created in plan.service.ts (imported) which can then be pulled ngOnInit
      .subscribe(plants => this.plants = plants);
  }

}
