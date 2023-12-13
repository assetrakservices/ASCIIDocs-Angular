import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { authGuard } from './guards/auth.guard';
import { AssetinventoryComponent } from './pages/assetinventory/assetinventory.component';
import { AdditionalassetsComponent } from './pages/additionalassets/additionalassets.component';
import { AssetcreationComponent } from './pages/assetcreation/assetcreation.component';
import { AssetstagesComponent } from './pages/assetstages/assetstages.component';
import { CategoryclassComponent } from './pages/categoryclass/categoryclass.component';
import { EditassetsComponent } from './pages/editassets/editassets.component';
import { FieldglossaryComponent } from './pages/fieldglossary/fieldglossary.component';
import { FieldviewconfigComponent } from './pages/fieldviewconfig/fieldviewconfig.component';
import { OrgstructureComponent } from './pages/orgstructure/orgstructure.component';
import { PretaggingComponent } from './pages/pretagging/pretagging.component';
//import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  //{
    //path: 'dashboard',
    //component: DashboardComponent,
  //},
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      //{
        //path: 'dashboard',
        //component: DashboardComponent 
      //},
      {path: 'additionalassets', component: AdditionalassetsComponent,canActivate: [authGuard] },
      {path: 'assetcreation', component: AssetcreationComponent,canActivate: [authGuard] },
      {path: 'assetinventory', component: AssetinventoryComponent, canActivate: [authGuard]},
      {path: 'assetstages', component: AssetstagesComponent,canActivate: [authGuard] },
      {path: 'categoryclass', component: CategoryclassComponent, canActivate: [authGuard]},
      {path: 'editassets', component: EditassetsComponent, canActivate: [authGuard]},
      {path: 'fieldglossary', component: FieldglossaryComponent, canActivate: [authGuard]},
      {path: 'fieldviewconfig', component: FieldviewconfigComponent, canActivate: [authGuard]},
      {path: 'orgstructure', component: OrgstructureComponent, canActivate: [authGuard]},
      {path: 'pretagging', component: PretaggingComponent, canActivate: [authGuard]}
    ]
  },
  {
    path:'**',
    component:LoginComponent
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
