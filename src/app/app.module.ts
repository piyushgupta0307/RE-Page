import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouteComponent } from './route/route.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';


const routes:Routes=[
{path:'route', component:RouteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RouteComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
