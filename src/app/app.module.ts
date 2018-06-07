import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {Routes, RouterModule} from '@angular/router';//引入路由
import {HttpModule} from '@angular/http'; //http服务
import {LoginService} from '../service/login.service'

import { AppComponent } from './app.component';
import { LoginComponent } from './../login/login.component';


//定义路由规则
export const ROUTES:Routes = [
  { path: 'login', component: LoginComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
