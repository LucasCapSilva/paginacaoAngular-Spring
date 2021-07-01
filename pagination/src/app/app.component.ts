import { FetchdataService } from './fetchdata.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  pages = [{id:0}]
  
  constructor(
    private fetchData: FetchdataService
  ) { }

  ngOnInit(){
this.getData()
this.totalPages()
  }

  totalPages(){

    for (let index = 0; index <= this.data.totalPages; index++) {
      this.pages.push({id:index});
      
    }
  }
  getData() {
    this.fetchData.getApi().subscribe(
      (data) => {
        this.data = data;
        console.log("legal")
        console.log(JSON.stringify(this.data.content))
      }
    );
  }

  proximaPagina(page:number) {
    this.fetchData.getApipage(page).subscribe(
      (data) => {
        this.data = data;
        console.log("legal")
        console.log(JSON.stringify(this.data.content))
      }
    );
  }
}