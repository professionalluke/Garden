import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Plant } from '../models/plant.model';
import { PlantService } from '../services/plant.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {
   plants: Plant[];   //declaring plants to be the Plant[] model imported above
   @Input() plant: Plant

  constructor(
    private plantService: PlantService,
    private route: ActivatedRoute,) { }

  ngOnInit() : void {
    this.getPlants();
  }

  getPlants(): any {
    // this.plants = this.plants.filter(p => p) 
    this.plantService.getPlants()     //plantService.getPlants() pulls the method created in plan.service.ts (imported) which can then be pulled ngOnInit
    // .pipe(map(p => {<any>}))
    .subscribe(plants => this.plants = plants) 
  }

  
  
  delete(plant: Plant): void {
    this.plants = this.plants.filter(p => p !== plant);
    this.plantService.deletePlant(plant).subscribe();
  }

  getPlant(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.plantService.getPlant(id)
      .subscribe(plant => this.plant = plant)
  }
}
