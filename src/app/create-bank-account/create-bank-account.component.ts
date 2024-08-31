import { BankAccountsService } from './../bank-accounts.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.css']
})
export class CreateBankAccountComponent {

public accountForm: FormGroup=new FormGroup({
  account_name:new FormControl(),
  available_balance:new FormControl(),
  account_number:new FormControl(),
  city:new FormControl(),
  profie_picture:new FormControl(),
});
  id: any;


constructor(private bankAccountsService:BankAccountsService,private _activatedRoute:ActivatedRoute){
  _activatedRoute.params.subscribe(
    (data:any)=>{
      console.log(data.id);
      this.id = data.id;
      bankAccountsService.createBankAccount(data.id).subscribe(
        (data:any)=>{
          this.accountForm.patchValue(data);
        }
      )
    }
  )

}
create() {

  this.bankAccountsService.createBankAccount(this.accountForm.value).subscribe((data)=>{
    alert("Successfully bank account created")
    this.accountForm.reset()
  },
(error:any)=>{
  alert("updation Fail!!!!")
})
   
    
   }
  }

