import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContacteditComponent } from './contactedit/contactedit.component';
import { ContactlistComponent } from './contactlist/contactlist.component';
import { CreatecontactComponent } from './createcontact/createcontact.component';
import { RegisterComponent } from './register/register.component';
import { SignComponent } from './sign/sign.component';


const routes: Routes = [
  {path:'contacts',component:ContactlistComponent},
  {path:'',redirectTo:'contacts',pathMatch:'full'},
  {path:'create-contact',component:CreatecontactComponent},
  {path:'edit/:id',component:ContacteditComponent},
  {path:'register',component:RegisterComponent},
  {path:'sign',component:SignComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






