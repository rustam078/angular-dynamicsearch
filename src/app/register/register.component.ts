import { Userregister } from './../userregister';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements AfterViewInit {

  // fname:string="";
	// lname:string="";
	// email:string="";
	// phone:string="";
	//   dob:Date;
  //  gender:string="";
  // country:number=0;
	// state:number=0;
	//  city:number=0;

   ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    this.getCountries();
 this.countrry=null;
 this.citiess=null;
  
  }
 
 user:Userregister= new Userregister();

  countriess:any;
  statess:any;
  citiess:any;
  countrry:any;

   constructor(private contactService:ContactService, private router:Router, private _coureService:CoreService) {

   }
   getCountries(){
    this.contactService.getcountries().subscribe(
      data=>{
       
        this.countriess = data; 

      }
    );
  }
   getstates(){
    this.countrry="notnull";
    this.contactService.getstate(this.user.country).subscribe(
      data=>{
       
        this.statess = data; 

      }
    );
  }
   getcities(){
    this.contactService.getcity(this.user.state).subscribe(
      data=>{
       
        this.citiess = data; 

      }
    );
  }

   onFormSubmit(){

    this.saveContact();

   }

   saveContact(){
    this.contactService.createContact(this.user).subscribe({
      next: (val: any) => {
        this._coureService.openSnackBar('Message sent to your mail for unlock account!');
      },
      error: (err: any) => {
        console.error(err);
      },
   });
  }
}
