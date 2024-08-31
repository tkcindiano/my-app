import { VehiclesService } from './../vehicles.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-vehicles',
  templateUrl: './view-vehicles.component.html',
  styleUrls: ['./view-vehicles.component.css'],
})
export class ViewVehiclesComponent {
  public vehicle: any = {};
  constructor(
    private activatedRoute: ActivatedRoute,
    private vehiclesService: VehiclesService
  ) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe((data: any) => {
      console.warn(data.id);
      this.vehiclesService.getVehicleBy(data.id).subscribe((data:any) => {
        this.vehicle = data;
        console.log(data)
        console.warn(data.cost);
        
      });
    });
  }
}
