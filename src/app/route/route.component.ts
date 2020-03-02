import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { first, retry } from "rxjs/operators";

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.css']
})
export class RouteComponent implements OnInit {

ind: string;
indNum: number;
arr3: any;
private jdata: any;
userType: any;
c: any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  //console.log(localStorage.getItem('jsonData'));
 this.route.queryParams.subscribe(params => {
      if (params.ind != null) {
	  this.indNum=params.ind;
	  
	  this.jdata=JSON.parse(localStorage.getItem('jsonData'));
	  this.arr3=Object.values(this.jdata)[this.indNum];
	  console.log("arr3 "+this.arr3[0].title);
	  
   
      }
	  else{
	  console.log("Index Number Not Found");
	  }

    });

}
}
