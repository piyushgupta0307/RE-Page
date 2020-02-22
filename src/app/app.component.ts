import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'releasePage';
  private assetsPath: string = "../../assets/";
  public data: any;
  closePreTab: boolean = true;
  public arr: any;
  public arr2: any;
  constructor(private http: HttpClient){}

  ngOnInit() {

    this.http.get(this.assetsPath + "data/data.json").subscribe((data) => {
    this.data = data;
	localStorage.setItem("jsonData", JSON.stringify(this.data));
	this.arr=Object.keys(this.data);
	}, (error) => {
      console.log(error);
    });

  }
}
