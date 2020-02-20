import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'releasePage';
  private assetsPath: string = "../../assets/";
  public data: any;

  constructor(private http: HttpClient){}

  ngOnInit() {

    this.http.get(this.assetsPath + "data/data.json").subscribe((data) => {
      // this.data = JSON.stringify(data);
      this.data = data;
      console.log("this is my data  "+this.data);
    }, (error) => {
      console.log(error);
    });

  }
}
