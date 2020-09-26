import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UsersModule} from './users/users.module';
import { ReactiveFormsModule } from "@angular/forms";
import { ChildComponentComponent } from './child-component/child-component.component';
import {HttpClientModule} from '@angular/common/http';
import {AngServiceService} from './ang-service.service'

@NgModule({
  declarations: [
    AppComponent,
    ChildComponentComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AngServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
