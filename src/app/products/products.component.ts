import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Plant } from '../models/plant.model';
import { PlantService } from '../services/plant.service';
import { AuthenticationService } from '../services/authentication.service'

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
    private authService: AuthenticationService

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
    // if(sessionStorage.value == 'token'){
    this.plants = this.plants.filter(p => p !== plant);
    this.plantService.deletePlant(plant).subscribe((res: any) => console.log(res));
  //} //else {
    // alert ("You can't do that")
    // }
  }

  getPlant(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.plantService.getPlant(id)
      .subscribe(plant => this.plant = plant)
  }
}
