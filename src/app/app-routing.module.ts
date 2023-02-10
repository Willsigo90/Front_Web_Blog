import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptionsComponent } from './layout/options/options.component';
import { WriterComponentComponent } from './writer-component/writer-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';


const routes: Routes = [

  {path:'options', component:OptionsComponent},
  {path:'writer', component:WriterComponentComponent},
  {path:'login', component:LoginComponentComponent},
  {path:'home', component:HomeComponentComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
