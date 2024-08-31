import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styleUrls: ['./create-vehicles.component.css'],
})
export class CreateVehiclesComponent {

  public id:string= "";


  public vehicleForm: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl(),
  });
  constructor(private _vehicleservice:VehiclesService, private _activatedRoute: ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data: any)=>{
        console.log(data.id);
        this.id=data.id;

        _vehicleservice.getVehicles(data.id).subscribe(
          (data:any)=>{
            this.vehicleForm.patchValue(data);
          }
        )
      }
    ) 
   }
   
  create() {
    // console.log(this.vehicleForm.value)
    if(this.id){
      
    }
    this._vehicleservice.createVehicles(this.vehicleForm.value).subscribe((result)=>{
      alert("successfully new vehicle object added")
      this.vehicleForm.reset()
    }),
    (error:any)=>{
      console.log(error)
    }
    }

}
