import { Component, OnInit } from '@angular/core';
import { Plant } from '../models/plant.model';
import { PlantService } from '../services/plant.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
   plants: Plant[];

  constructor(
    private plantService: PlantService,
  ) { }

  ngOnInit() : void {
    this.getPlants();
  }

  getPlants(): void {
    this.plantService.getPlants()
      .subscribe(plants => this.plants = plants);
  }

}
