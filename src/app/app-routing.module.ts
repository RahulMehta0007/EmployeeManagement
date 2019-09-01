import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthguardService } from 'src/app/service/authguard.service';
import { NotFoundComponent } from 'src/app/basic/not-found/not-found.component';
import { ViewEmployeeComponent } from 'src/app/crud/view-employee/view-employee.component';
import { CreateEmployeeComponent } from 'src/app/crud/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from 'src/app/crud/view-employee/update-employee/update-employee.component';
import { LoginComponent } from 'src/app/authenticate/login/login.component';
import { LogoutComponent } from 'src/app/authenticate/logout/logout.component';
import { HomeComponent } from 'src/app/basic/home/home.component';

const routes: Routes = [
{path:"view",component:ViewEmployeeComponent,canActivate:[AuthguardService]},
{path:"create",component:CreateEmployeeComponent,canActivate:[AuthguardService]},
{path:"update",component:UpdateEmployeeComponent,canActivate:[AuthguardService]},
{path:"login",component:LoginComponent},
{path:"logout",component:LogoutComponent,canActivate:[AuthguardService]},
{path:"",component:HomeComponent,pathMatch: 'full'},
{path:"**",component:NotFoundComponent,canActivate:[AuthguardService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
