import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {HeaderComponent} from "../header/header.component";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,BrowserModule,HttpClientModule,RouterModule
  ],exports:[

  ]
})
export class SharedModule { }
