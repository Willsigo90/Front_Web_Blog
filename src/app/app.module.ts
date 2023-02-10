import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './services/auth.interceptor';
import { OptionsComponent } from './layout/options/options.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { RouterModule, Routes } from '@angular/router';
import { WriterComponentComponent } from './writer-component/writer-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';

// const appRoutes: Routes=[
//   {path:'', component: HomeComponentComponent},
//   // {path:'writer', component: WriterComponentComponent},
//   {path:'login', component: LoginComponentComponent},
  
// ]


@NgModule({
  declarations: [
    AppComponent,
    OptionsComponent,
    HomeComponentComponent,
    WriterComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot(appRoutes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
