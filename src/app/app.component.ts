import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  template: `<div id='treeparent'><ejs-treeview id='treeelement' [fields]='field' [allowEditing]='allowEditing' (nodeEditing)='editing($event)'></ejs-treeview></div>`
})
export class AppComponent {
  
  title = 'releasePage';
  private assetsPath: string = "../../assets/";
  public data: any;

  constructor(private http: HttpClient){}

  ngOnInit() {

    this.http.get(this.assetsPath + "data/data.json").subscribe((data1) => {
      this.data = JSON.stringify(data1);
      console.log("this is my dta  "+this.data);
    }, (error) => {
      console.log(error);
    });

  }

      // maps the appropriate column to fields property
      public field: Object = { dataSource: this.data, id: 'id', text: 'name', child: 'subChild' };
      // enable the editing options to the TreeView
      public allowEditing: boolean = true;
      //Bind the nodeChecked event
      // public editing(args: NodeCheckEventArgs) {
      //         //check whether node is root node or not
      //         if (args.node.parentNode.parentNode.nodeName !== "LI") {
      //             args.cancel = true;
      //         }
      // };
}
