import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankAccountsService } from '../bank-accounts.service';

@Component({
  selector: 'app-view-banks',
  templateUrl: './view-banks.component.html',
  styleUrls: ['./view-banks.component.css']
})
export class ViewBanksComponent {
  public bankAccount:any={}
constructor(private bankService:BankAccountsService,private activatdRoute:ActivatedRoute){}
ngOnInit(){
this.activatdRoute.params.subscribe((data:any)=>{
  // console.warn(data.id);
   this.bankService.getAccountsDetailById(data.id).subscribe((data)=>{
    this.bankAccount=data;
    // console.log(data);
   })
})
}
}
