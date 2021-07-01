import { FetchdataService } from './fetchdata.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  listaPagina=[0];
  
  constructor(
    private fetchData: FetchdataService
  ) { }

  ngOnInit(){
  this.getData()
 
  }

  totalPages(){
    this.listaPagina.splice(0)
    for (let index = 0; index <= this.data.totalPages; index++) {
      this.listaPagina.push(index);
    }
    this.listaPagina.splice(this.data.totalPages,this.data.totalPages)
    console.log(this.data.totalPages);
    console.log("totaldePaginas ");
   
  }
  getData() {
    this.fetchData.getApi().subscribe(
      (data) => {
        this.data = data;
        this.totalPages()
       
      }
    );
  }

  proximaPagina(page:number) {
    this.fetchData.getApipage(page).subscribe(
      (data) => {
        this.data = data;
    
      }
    );
  }
}